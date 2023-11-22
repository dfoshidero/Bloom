// PlantHitbox.js
export const getPlantHitBox = (progress) => {
    let height;
    if (progress >= 1) {
      height = 150; // Hitbox height for progress > 0.75
    } else if (progress >= 0.66) {
      height = 125; // Hitbox height for progress > 0.5
    } else if (progress >= 0.33) {
      height = 100; // Hitbox height for progress > 0.25
    } else {
      height = 80; // Default height
    }
  
    return {
      width: 70,
      height: height,
      left: 65,
    };
  };
  