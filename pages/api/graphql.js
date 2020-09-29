import { ApolloServer, gql } from "apollo-server-micro";

import knex from "knex";

const db = knex({
	client: "pg",
	connection: process.env.POSTGRES_URI,
	debug: true,
});
const typeDefs = gql`
	type Query {
		allcourses(first: Int = 50, skip: Int = 0): [course]
		allCatagory: allCatagory
	}
	scalar Date
	type course {
		courseId: Int
		title: String
		catagory: String
		price: Int
		enroled: Int
		likes: Int
		tutorId: String
		overview: String
		level: String
		language: String
		created_at: Date
	}
	type allCatagory {
		bestSelling: [course]
		webDevelopment: [course]
		graphics: [course]
		academic: [course]
	}
	type tutors {
		tutorId: ID
		name: String!
		email: String!
		joined: Date
	}
	type courseVideo {
		Id: Int
		videoTitle: String
		duration: String
		urls: String
		features: String
	}

	type Mutation {
		Addcourse(
			title: String
			catagory: String
			price: Int
			tutorId: String
			overview: String
			level: String
			language: String
		): [course]
		Addcoursevideos(
			db: String
			videoTitle: String
			duration: String
			urls: String
			features: String
		): courseVideo
	}
`;

const resolvers = {
	Query: {
		allcourses(parent, args) {
			return db.select("*").table("courseinfo");
		},
		allCatagory: async (parent, args) => {
			const bestSelling = await db("courseinfo").orderBy("enroled", "desc");
			const webDevelopment = await db("courseinfo").where(
				"catagory",
				"web-development"
			);
			const graphics = await db("courseinfo").where("catagory", "graphics");
			const academic = await db("courseinfo").where("catagory", "academic");
			return { bestSelling, webDevelopment, graphics, academic };
		},
	},
	Mutation: {
		Addcourse: async (parent, args) => {
			const insertInDb = await db("courseinfo").returning("*").insert({
				title: args.title,
				catagory: args.catagory,
				price: args.price,
				tutorId: args.tutorId,
				overview: args.overview,
				level: args.level,
				language: args.language,
				created_at: new Date(),
			});
			return insertInDb;
		},
		Addcoursevideos(parents, arg) {
			const dbdata = {
				videoTitle: arg.videoTitle,
				duration: arg.duration,
				urls: arg.urls,
				features: arg.features,
			};
			const data = db(arg.db)
				.returning(["Id", "videoTitle", " duration", "urls", " features"])
				.insert(dbdata);
			return { courses: [data] };
		},
	},
};

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => {},
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default apolloServer.createHandler({ path: "/api/graphql" });
