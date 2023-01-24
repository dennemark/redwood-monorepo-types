import { UPDATE_USER_EXAMPLE_MUTATION } from 'web/src/components/UserExample/EditUserExampleCell/EditUserExampleCell'

import { useMutation } from '@redwoodjs/web'

export const MyComp = () => {
  // update shows the type any, but should  get proper return type of useMutation
  // same code within redwoods web workspace works with correct typing
  const [update] = useMutation(UPDATE_USER_EXAMPLE_MUTATION)
  // also no intellisense within the call of update
  update({})
  return <></>
}
