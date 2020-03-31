import { LikeComponent } from './likes';

let likesComponent = new LikeComponent(10, true);
likesComponent.onClick();
console.log(`Total no of clicks - ${likesComponent.likesCount}`);
console.log(`Like button selected? - ${likesComponent.isSelected}`);