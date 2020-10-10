let plantsInField = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        plantsInField = plantsInField.concat(seedObj)
    } else {
        plantsInField.push(seedObj)
    }
}

export const usePlants = () => {
    return plantsInField
}