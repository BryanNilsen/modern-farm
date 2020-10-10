import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { addPlant, usePlants } from './field.js'

console.log("Welcome to the main module")

const testCorn = createCorn()
const testAsparagus = createAsparagus()

addPlant(testCorn);
const plantsWithCorn = usePlants()
console.log('plantsWithCorn: ', plantsWithCorn);

addPlant(testAsparagus)
const plantsWithCornAndAsparagus = usePlants()
console.log('plantsWithCornAndAsparagus: ', plantsWithCornAndAsparagus);

// const yearlyPlan = createPlan();
// console.log('yearlyPlan: ', yearlyPlan);