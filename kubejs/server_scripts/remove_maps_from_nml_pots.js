LootJS.lootTables((event) => {
    event.getLootTable("nomansland:chests/alchemist_pot_alchemy").firstPool().removeItem("minecraft:map");
    event.getLootTable("nomansland:chests/alchemist_pot_artisanship").firstPool().removeItem("minecraft:map");
    event.getLootTable("nomansland:chests/debug_treasure_maps").firstPool().removeItem("minecraft:map");
    event.getLootTable("nomansland:chests/alchemist_pot_treasure").firstPool().removeItem("minecraft:map");
    event.getLootTable("nomansland:chests/alchemist_pot_potions").firstPool().removeItem("minecraft:map");
    event.getLootTable("nomansland:chests/ancient_pot_cave").firstPool().removeItem("minecraft:map");
    event.getLootTable("nomansland:archaeology/alchemist_maps").firstPool().removeItem("minecraft:map");
    event.getLootTable("nomansland:gameplay/frienderman_gift").firstPool().removeItem("minecraft:map");
});