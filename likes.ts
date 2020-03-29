export class LikeComponent {
	constructor(public likesCount=0, public isSelected) {
	}

	onClick() {
		this.likesCount += this.isSelected ? -1: 1;
		this.isSelected = !this.isSelected;
	}
}

