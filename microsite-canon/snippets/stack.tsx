'use client';

import * as StackStories from '../../packages/canon/src/components/Stack/Stack.stories';
import { composeStories } from '@storybook/react';

export const StackPreview = () => {
  const { Default } = composeStories(StackStories);

  return <Default />;
};
