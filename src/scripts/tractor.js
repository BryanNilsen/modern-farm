import { createPotato } from './seeds/potato.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createSunflower } from './seeds/sunflower.js'
import { createSoybean } from './seeds/soybean.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'

export const plantSeeds = (yearPlanArray) => {
    yearPlanArray.forEach(planArray => {
        planArray.forEach(plan => {
            if (plan === "Potato") {
                const newPotato = createPotato()
                addPlant(newPotato)
            }
            if (plan === "Asparagus") {
                const newAsparagus = createAsparagus()
                addPlant(newAsparagus)
            }
            if (plan === "Corn") {
                const newCorn = createCorn()
                addPlant(newCorn)
            }
            if (plan === "Sunflower") {
                const newSunflower = createSunflower()
                addPlant(newSunflower)
            }
            if (plan === "Soybean") {
                const newSoybean = createSoybean()
                addPlant(newSoybean)
            }
            if (plan === "Wheat") {
                const newWheat = createWheat()
                addPlant(newWheat)
            }
        })
    });
}