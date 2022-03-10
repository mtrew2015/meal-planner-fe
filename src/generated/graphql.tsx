import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateIngredientInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
  qty: Scalars['Float'];
};

export type CreateRecipeInput = {
  ingredients: Array<IngredientInput>;
  linkToRecipe: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  serves: Scalars['Float'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  _id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
  qty: Scalars['String'];
};

export type IngredientInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
  serves: Scalars['Float'];
};

export type IngredientObject = {
  __typename?: 'IngredientObject';
  name: Scalars['String'];
  price: Scalars['Float'];
  serves: Scalars['Float'];
};

export type ListIngredientInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Float']>;
};

export type ListRecipeInput = {
  _id?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<IngredientInput>>;
  linkToRecipe?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  serves?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient: Ingredient;
  createRecipe: Recipe;
  deleteIngredient: Ingredient;
  deleteRecipe: Recipe;
  updateIngredient: Ingredient;
  updateRecipe: Recipe;
};


export type MutationCreateIngredientArgs = {
  payload: CreateIngredientInput;
};


export type MutationCreateRecipeArgs = {
  payload: CreateRecipeInput;
};


export type MutationDeleteIngredientArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteRecipeArgs = {
  _id: Scalars['String'];
};


export type MutationUpdateIngredientArgs = {
  payload: UpdateIngredientInput;
};


export type MutationUpdateRecipeArgs = {
  payload: UpdateRecipeInput;
};

export type Query = {
  __typename?: 'Query';
  ingredient: Ingredient;
  ingredients: Array<Ingredient>;
  recipe: Recipe;
  recipes: Array<Recipe>;
};


export type QueryIngredientArgs = {
  _id: Scalars['String'];
};


export type QueryIngredientsArgs = {
  filters?: InputMaybe<ListIngredientInput>;
};


export type QueryRecipeArgs = {
  _id: Scalars['String'];
};


export type QueryRecipesArgs = {
  filters?: InputMaybe<ListRecipeInput>;
};

export type Recipe = {
  __typename?: 'Recipe';
  _id: Scalars['String'];
  ingredients: Array<IngredientObject>;
  linkToRecipe: Scalars['String'];
  name: Scalars['String'];
  serves: Scalars['Float'];
};

export type UpdateIngredientInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Float']>;
};

export type UpdateRecipeInput = {
  _id?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<IngredientInput>>;
  linkToRecipe?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  serves?: InputMaybe<Scalars['Float']>;
};

export type IngredientsQueryVariables = Exact<{
  filters?: InputMaybe<ListIngredientInput>;
}>;


export type IngredientsQuery = { __typename?: 'Query', ingredients: Array<{ __typename?: 'Ingredient', _id: string, name: string, price: string, qty: string }> };


export const IngredientsDocument = gql`
    query ingredients($filters: ListIngredientInput) {
  ingredients(filters: $filters) {
    _id
    name
    price
    qty
  }
}
    `;

/**
 * __useIngredientsQuery__
 *
 * To run a query within a React component, call `useIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIngredientsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useIngredientsQuery(baseOptions?: Apollo.QueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, options);
      }
export function useIngredientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, options);
        }
export type IngredientsQueryHookResult = ReturnType<typeof useIngredientsQuery>;
export type IngredientsLazyQueryHookResult = ReturnType<typeof useIngredientsLazyQuery>;
export type IngredientsQueryResult = Apollo.QueryResult<IngredientsQuery, IngredientsQueryVariables>;