import React, { useState } from 'react';
import { useMealPlansQuery } from '../../generated/graphql.tsx';
import { getWeekOfYear } from '../../util/dateHelpers';

export const useLandingPage = () => {
  const weekOfYear = getWeekOfYear();
  const { data, loading, error } = useMealPlansQuery({
    variables: {
      filters: {
        weekNumber: weekOfYear,
      },
    },
  });

  console.log(data)

  return {
    data
  }
};
