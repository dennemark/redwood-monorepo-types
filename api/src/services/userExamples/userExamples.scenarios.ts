import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String7122187' } },
    two: { data: { email: 'String1250786' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
