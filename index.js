class SortedList {
	constructor() {
		this.items = []
		this.length = 0
	}

	getLength() {
		return this.items.length
	}

	add(item) {
		this.items.push(item)
		this.items.sort((a, b) => a - b)
		this.length = this.items.length
	}

	get(pos) {
		// console.log('this.items: ', this.items)
		const value = this.items[pos]
		if (value === undefined) {
			throw new Error('OutOfBounds')
		}
		return value
	}

	max() {
		if (this.items.length === 0) {
			throw new Error('EmptySortedList')
		} else {
			return Math.max(...this.items)
		}
	}

	min() {
		if (this.items.length === 0) {
			throw new Error('EmptySortedList')
		} else {
			return Math.min(...this.items)
		}
	}

	sum() {
		let sumNumbers = 0
		for (const i of this.items) {
			sumNumbers += i
		}
		return sumNumbers
	}

	avg() {
		let sumNumbers = 0
		if (this.items.length === 0) {
			throw new Error('EmptySortedList')
		}

		for (const i of this.items) {
			sumNumbers += i
		}
		return sumNumbers / this.items.length
	}
}

module.exports = SortedList
