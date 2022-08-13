
<template>
 	<svg
		v-if="icon"
		preserveAspectRatio="xMaxYMax meet"
		class="svg-icon"
		v-bind="iconSize"
		:viewBox="icon.viewBox"
		v-on="inputListeners"
	>
		<use :xlink:href="icon.href" />
	</svg>
</template>

<script>
	export default {
		name: 'SvgIcon',
		props: {
			name: {
				type: String,
				required: true,
			},
			width: {
			type: Number,
			default: 0,
			validator: (value) => value >= 0,
			},
			height: {
				type: Number,
				default: 0,
				validator: (value) => value >= 0,
			},
		},
		computed: {
			icon() {
				try {
					let name = this.name;
					let directory = '';

					if (name.includes('--')) {
						const parts = name.split('--');
						directory = `${parts[0]}/`;
						name = parts[1];
					}

					let icon = require(`../../assets/icons/${directory}${name}.svg?sprite`);

					if (Object.prototype.hasOwnProperty.call(icon, "default")) {
						icon = icon.default;
					}

					icon.href = `#${icon.id}`;

					return icon;
				} catch (error) {
					console.error(`Icon: "${this.name}" not found!`);
				}
			},
			iconSize() {
				if (this.width === 0 && this.height === 0) {
					return this.getLocalIconSizes();
				}

				const size = {};

				if (this.width !== 0) {
					size.width = this.width + "px";
				}

				if (this.height !== 0) {
					size.height = this.height + "px";
				}

				return size;
			},
			inputListeners() {
				return Object.assign({},
					this.$listeners,
					{
						click: (event) => {
							this.$emit('click', event);
						},
					}
				);
			},
		},
		methods: {
			getLocalIconSizes() {
				const iconSizes = this.icon.viewBox.split(" ");

				let [, , width, height] = iconSizes;

				return {
					width: width + "px",
					height: height + "px",
				};
			},
		},
	}
</script>

<style lang="scss" scoped>
.svg-icon {
	fill: currentColor;
	box-sizing: content-box;
}
</style>
