import create from "zustand";

export const useStore = create((set) => ({
  cubes: [],
  addCube: (x: number, y: number, z: number, type: string) =>
    set((state: any) => ({
      cubes: [...state.cubes, { pos: [x, y, z], type }],
    })),
  removeCube: (x: number, y: number, z: number) =>
    set((state: any) =>
      state.cubes.filter(
        (cube: any) => cube.x !== x || cube.y !== y || cube.z !== z
      )
    ),
  texture: "wood",
  setTexture: (texture: any) => set((state) => ({ texture })),
  saveWorld: () => {},
}));
