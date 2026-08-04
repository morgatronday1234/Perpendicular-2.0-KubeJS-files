// priority: 10
ServerEvents.recipes(event => {

    // -----------------
    // SAG Mill
    // -----------------

    function sagMill(input, outputs, energy, recipeID, bonusType) {
        if (!bonusType) {
            bonusType = SagMillBonus.MULTIPLY_OUTPUT
        }

        let outputsbuffer = []
        outputs.forEach(output => {
            if (!output.count) {
                output.count = 1
            }

            if (output.chance) {
                outputsbuffer.push(SagMillOutput.of(`${output.count}x ${output.item}`, output.chance))
            } else {
                outputsbuffer.push(SagMillOutput.of(`${output.count}x ${output.item}`))
            }
        })

        event.recipes.enderio.sag_milling(
         outputsbuffer,
         input,
         energy,
         SagMillBonus.NONE
        ).id(`perpendicular:sag_milling/${recipeID}`)

        //event.custom(recipe).id(`perpendicular:sag_milling/${recipeID}`)
    }

    // Unify flour
    sagMill('#c:crops/wheat', [{item: 'pneumaticcraft:wheat_flour'}, {item: 'minecraft:wheat_seeds', chance: 0.2}], 2400, 'wheat')

    // Salt
    sagMill('galosphere:pink_salt_shard', [{item: 'spelunkery:salt', count: 2}, {item: 'spelunkery:salt', chance: 0.75}], 2400, 'salt')
    
    // -----------------
    // Alloy Smelting
    // -----------------

    function alloySmelting(inputs, output, energy, xp, recipeID) {
        if (!output.count) {
            output.count = 1
        }

        let inputsbuffer = []
        inputs.forEach(input => {
            if (!input.count) {
                input.count = 1
            }
        
            inputsbuffer.push(Ingredient.of(input.item, input.count))
        })
       
        event.recipes.enderio.alloy_smelting(
         `${output.count}x ${output.item}`, //Pro-tip! Don't do this.
         inputsbuffer,
         energy,
         xp
        ).id(`perpendicular:alloy_smelting/${recipeID}`)

        //event.custom(recipe).id(`perpendicular:alloy_smelting/${recipeID}`)
    }
    
    // Unify flour
    //alloySmelting([{item: 'pneumaticcraft:wheat_flour', count: 3}, {item: 'minecraft:egg'}], {item: 'enderio:cake_base', count: 2}, 2000, 0.3, 'cake_base') //Cake base was removed
    alloySmelting([{item: 'pneumaticcraft:wheat_flour'}, {item: 'minecraft:cocoa_beans'}], {item: 'minecraft:cookie', count: 8}, 2000, 0.3, 'cookie')

})