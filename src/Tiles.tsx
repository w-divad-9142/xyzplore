
export const WALL_TILE = {
  name: 'wall',
  color: '#733406',
  key: 'x',
  impassable: true,
}

export const EMPTY_TILE = {
  name: 'empty',
  color: '#1e1c1c',
  key: '-',
}

export const WATER_TILE = {
  name: 'water',
  color: 'royalblue',
  key: 'w',
  display: '~',
  impassable: true,
}

export const GRASS_TILE = {
  name: 'grass',
  color: '#2c6d2c',
  key: 'g',
  display: 'ᆡ',
}

export const ROCK_TILE = {
  name: 'rock',
  color: 'gray',
  key: 'r',
  impassable: true,
}

export const PLAYER_TILE = {
  name: 'player',
  color: 'pink',
  key: 'P',
  display: '𐀪',
  impassable: true,
}

export const NPC_TILE = {
  name: 'npc',
  color: 'orange',
  key: 'N',
  display: '𐂁',
  impassable: true,
  npc: true,
}

export const FLOWER_TILE = {
  name: 'flower',
  color: '#ff4263',
  key: 'f',
  display: '𐃓',
}

export const TREE_TILE = {
  name: 'tree',
  color: '#00a307',
  key: 'T',
  display: '𐃐',
}

export const HOUSE_TILE = {
  name: 'house',
  color: 'brown',
  key: 'H',
  display: '𐂺',
  impassable: true,
}

export const DOWN_STAIRS_TILE = {
  name: 'down-stairs',
  color: '#e4d01e',
  key: 'd',
  display: '∏',
}

export const UP_STAIRS_TILE = {
  name: 'up-stairs',
  color: '#e4d01e',
  key: 'u',
  display: '∏',
}

export const SLIME_TILE = {
  name: 'slime',
  color: '#daa608',
  key: 's',
  display: '𐂃',
  impassable: true,
  npc: true,
}


export const BAT_TILE = {
  name: 'bat',
  color: 'purple',
  key: 'b',
  display: 'ᄊ',
  impassable: true,
  npc: true,
}


export const TILES = [
  WALL_TILE,
  EMPTY_TILE,
  WATER_TILE,
  GRASS_TILE,
  ROCK_TILE,
  PLAYER_TILE,
  BAT_TILE,
  NPC_TILE,
  SLIME_TILE,
  FLOWER_TILE,
  TREE_TILE,
  HOUSE_TILE,
  DOWN_STAIRS_TILE,
  UP_STAIRS_TILE,
]

export const TILE_MAP = TILES.reduce((acc, tile) => {
  acc[tile.key] = tile;
  return acc;
}, {});
