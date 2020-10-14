import { createPlan } from './plan.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'

import { harvestPlants } from './harvester.js'

console.log("Welcome to the main module")


const yearlyPlan = createPlan();
console.log('yearlyPlan: ', yearlyPlan);

plantSeeds(yearlyPlan)

const allPlants = usePlants()
console.log(allPlants)

const harvestedPlants = harvestPlants(allPlants)
console.log('harvestedPlants: ', harvestedPlants);