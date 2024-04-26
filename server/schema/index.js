import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

const MoviesType = new GraphQLObjectType({
	name: 'Movies',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	}),
});

const query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movie: {
			type: MoviesType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {},
		},
	},
});

export default new GraphQLSchema({ query });
