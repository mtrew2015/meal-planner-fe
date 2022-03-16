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
  name: Scalars['String'];
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

export type CreateMealPlanMutationVariables = Exact<{
  payload: CreateMealPlanInput;
}>;


export type CreateMealPlanMutation = { __typename?: 'Mutation', createMealPlan: { __typename?: 'MealPlan', _id: string, userId: string, weekNumber: number, name: string } };

export type CreateRecipeMutationVariables = Exact<{
  payload: CreateRecipeInput;
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', createRecipe: { __typename?: 'Recipe', _id: string, name: string, serves: number, ingredients: Array<{ __typename?: 'IngredientObject', name: string, price: number, serves: number }> } };

export type MealPlansQueryVariables = Exact<{
  filters?: InputMaybe<ListMealPlanInput>;
}>;


export type MealPlansQuery = { __typename?: 'Query', mealPlans: Array<{ __typename?: 'MealPlan', _id: string, userId: string, weekNumber: number, name: string, recipesSelected: Array<{ __typename?: 'Recipe', _id: string, linkToRecipe: string, name: string, serves: number, ingredients: Array<{ __typename?: 'IngredientObject', name: string, price: number, serves: number }> }> }> };

export type RecipesQueryVariables = Exact<{
  filters?: InputMaybe<ListRecipeInput>;
}>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', _id: string, name: string, linkToRecipe: string, serves: number, ingredients: Array<{ __typename?: 'IngredientObject', name: string, price: number, serves: number }> }> };


export const CreateMealPlanDocument = gql`
    mutation createMealPlan($payload: CreateMealPlanInput!) {
  createMealPlan(payload: $payload) {
    _id
    userId
    weekNumber
    name
  }
}
    `;
export type CreateMealPlanMutationFn = Apollo.MutationFunction<CreateMealPlanMutation, CreateMealPlanMutationVariables>;

/**
 * __useCreateMealPlanMutation__
 *
 * To run a mutation, you first call `useCreateMealPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMealPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMealPlanMutation, { data, loading, error }] = useCreateMealPlanMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateMealPlanMutation(baseOptions?: Apollo.MutationHookOptions<CreateMealPlanMutation, CreateMealPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMealPlanMutation, CreateMealPlanMutationVariables>(CreateMealPlanDocument, options);
      }
export type CreateMealPlanMutationHookResult = ReturnType<typeof useCreateMealPlanMutation>;
export type CreateMealPlanMutationResult = Apollo.MutationResult<CreateMealPlanMutation>;
export type CreateMealPlanMutationOptions = Apollo.BaseMutationOptions<CreateMealPlanMutation, CreateMealPlanMutationVariables>;
export const CreateRecipeDocument = gql`
    mutation createRecipe($payload: CreateRecipeInput!) {
  createRecipe(payload: $payload) {
    _id
    ingredients {
      name
      price
      serves
    }
    name
    serves
  }
}
    `;
export type CreateRecipeMutationFn = Apollo.MutationFunction<CreateRecipeMutation, CreateRecipeMutationVariables>;

/**
 * __useCreateRecipeMutation__
 *
 * To run a mutation, you first call `useCreateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeMutation, { data, loading, error }] = useCreateRecipeMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateRecipeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecipeMutation, CreateRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecipeMutation, CreateRecipeMutationVariables>(CreateRecipeDocument, options);
      }
export type CreateRecipeMutationHookResult = ReturnType<typeof useCreateRecipeMutation>;
export type CreateRecipeMutationResult = Apollo.MutationResult<CreateRecipeMutation>;
export type CreateRecipeMutationOptions = Apollo.BaseMutationOptions<CreateRecipeMutation, CreateRecipeMutationVariables>;
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
    name
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
export const RecipesDocument = gql`
    query recipes($filters: ListRecipeInput) {
  recipes(filters: $filters) {
    _id
    name
    linkToRecipe
    serves
    ingredients {
      name
      price
      serves
    }
  }
}
    `;

/**
 * __useRecipesQuery__
 *
 * To run a query within a React component, call `useRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useRecipesQuery(baseOptions?: Apollo.QueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
      }
export function useRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
        }
export type RecipesQueryHookResult = ReturnType<typeof useRecipesQuery>;
export type RecipesLazyQueryHookResult = ReturnType<typeof useRecipesLazyQuery>;
export type RecipesQueryResult = Apollo.QueryResult<RecipesQuery, RecipesQueryVariables>;