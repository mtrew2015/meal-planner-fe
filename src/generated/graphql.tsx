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

export type CreateMealPlanInput = {
  name: Scalars['String'];
  recipesSelected: Array<Scalars['String']>;
  userId: Scalars['String'];
  weekNumber: Scalars['Float'];
};

export type CreateRecipeInput = {
  ingredients: Array<IngredientInput>;
  linkToRecipe: Scalars['String'];
  name: Scalars['String'];
  serves: Scalars['Float'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  state: Scalars['String'];
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

export type ListMealPlanInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  recipesSelected?: InputMaybe<Array<Scalars['String']>>;
  userId?: InputMaybe<Scalars['String']>;
  weekNumber?: InputMaybe<Scalars['Float']>;
};

export type ListRecipeInput = {
  _id?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<IngredientInput>>;
  linkToRecipe?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  serves?: InputMaybe<Scalars['Float']>;
};

export type ListUserInput = {
  _id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type MealPlan = {
  __typename?: 'MealPlan';
  _id: Scalars['String'];
  recipesSelected: Array<Recipe>;
  userId: Scalars['String'];
  weekNumber: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient: Ingredient;
  createMealPlan: MealPlan;
  createRecipe: Recipe;
  createUser: User;
  deleteIngredient: Ingredient;
  deleteMealPlan: MealPlan;
  deleteRecipe: Recipe;
  deleteUser: User;
  updateIngredient: Ingredient;
  updateMealPlan: MealPlan;
  updateRecipe: Recipe;
  updateUser: User;
};


export type MutationCreateIngredientArgs = {
  payload: CreateIngredientInput;
};


export type MutationCreateMealPlanArgs = {
  payload: CreateMealPlanInput;
};


export type MutationCreateRecipeArgs = {
  payload: CreateRecipeInput;
};


export type MutationCreateUserArgs = {
  payload: CreateUserInput;
};


export type MutationDeleteIngredientArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteMealPlanArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteRecipeArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['String'];
};


export type MutationUpdateIngredientArgs = {
  payload: UpdateIngredientInput;
};


export type MutationUpdateMealPlanArgs = {
  payload: UpdateMealPlanInput;
};


export type MutationUpdateRecipeArgs = {
  payload: UpdateRecipeInput;
};


export type MutationUpdateUserArgs = {
  payload: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  ingredient: Ingredient;
  ingredients: Array<Ingredient>;
  mealPlan: MealPlan;
  mealPlans: Array<MealPlan>;
  recipe: Recipe;
  recipes: Array<Recipe>;
  user: User;
  users: Array<User>;
};


export type QueryIngredientArgs = {
  _id: Scalars['String'];
};


export type QueryIngredientsArgs = {
  filters?: InputMaybe<ListIngredientInput>;
};


export type QueryMealPlanArgs = {
  _id: Scalars['String'];
};


export type QueryMealPlansArgs = {
  filters?: InputMaybe<ListMealPlanInput>;
};


export type QueryRecipeArgs = {
  _id: Scalars['String'];
};


export type QueryRecipesArgs = {
  filters?: InputMaybe<ListRecipeInput>;
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};


export type QueryUsersArgs = {
  filters?: InputMaybe<ListUserInput>;
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

export type UpdateMealPlanInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  recipesSelected?: InputMaybe<Array<Scalars['String']>>;
  userId?: InputMaybe<Scalars['String']>;
  weekNumber?: InputMaybe<Scalars['Float']>;
};

export type UpdateRecipeInput = {
  _id?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<IngredientInput>>;
  linkToRecipe?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  serves?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserInput = {
  _id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  state: Scalars['String'];
};

export type MealPlansQueryVariables = Exact<{
  filters?: InputMaybe<ListMealPlanInput>;
}>;


export type MealPlansQuery = { __typename?: 'Query', mealPlans: Array<{ __typename?: 'MealPlan', _id: string, userId: string, weekNumber: number, recipesSelected: Array<{ __typename?: 'Recipe', _id: string, linkToRecipe: string, name: string, serves: number, ingredients: Array<{ __typename?: 'IngredientObject', name: string, price: number, serves: number }> }> }> };

export type IngredientsQueryVariables = Exact<{
  filters?: InputMaybe<ListIngredientInput>;
}>;


export type IngredientsQuery = { __typename?: 'Query', ingredients: Array<{ __typename?: 'Ingredient', _id: string, name: string, price: string, qty: string }> };


export const MealPlansDocument = gql`
    query mealPlans($filters: ListMealPlanInput) {
  mealPlans(filters: $filters) {
    _id
    recipesSelected {
      _id
      ingredients {
        name
        price
        serves
      }
      linkToRecipe
      name
      serves
    }
    userId
    weekNumber
  }
}
    `;

/**
 * __useMealPlansQuery__
 *
 * To run a query within a React component, call `useMealPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealPlansQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useMealPlansQuery(baseOptions?: Apollo.QueryHookOptions<MealPlansQuery, MealPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MealPlansQuery, MealPlansQueryVariables>(MealPlansDocument, options);
      }
export function useMealPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealPlansQuery, MealPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MealPlansQuery, MealPlansQueryVariables>(MealPlansDocument, options);
        }
export type MealPlansQueryHookResult = ReturnType<typeof useMealPlansQuery>;
export type MealPlansLazyQueryHookResult = ReturnType<typeof useMealPlansLazyQuery>;
export type MealPlansQueryResult = Apollo.QueryResult<MealPlansQuery, MealPlansQueryVariables>;
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