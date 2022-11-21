<template>
	<button
		class="the-button"
		:class="className"
		:disabled="disabled"
		@click="onClick"
	>
		<div
			class="the-button__label button-label noselect"
			v-if="!hideLabel"
		>
			{{ label }}
		</div>

		<div
			class="the-button__icon"
			v-if="icon"
		>
			<svg-icon :name="icon" />
		</div>
	</button>
</template>

<script>
import SvgIcon from '@/components/atomics/SvgIcon.vue';

export default {
	name: 'TheButton',
	components: {
		SvgIcon,
	},
	props: {
		type: {
			type: String,
			default: 'filled',
			validator: (value) => ['filled', 'ghost', 'outline'].includes(value),
		},
		color: {
			type: String,
			default: 'primary',
			validator: (value) => ['primary', 'accent', 'black', 'black-transparent', 'secondary'].includes(value),
		},
		rounded: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: String,
			default: '',
		},
		fullWidth: {
			type: Boolean,
			default: false,
		},
		hideLabel: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		className() {
			return [
				`the-button_${this.type}`,
				`the-button_${this.type}-${this.color}`,
				this.rounded && 'the-button_rounded',
				this.disabled && 'disabled',
				this.fullWidth && `full-width`,
			];
		},
	},
	methods: {
		onClick(event) {
			this.$emit('click', event);
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.the-button {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 44px;
	padding: 0 8px;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	position: relative;
	outline: none;
	min-width: 44px;
	flex-shrink: 0;
	transition: all $transition-speed $transition-animation;

	// Layout

	&__label {
		color: inherit;
		margin: 0 8px;
	}

	&__icon {
		color: inherit;
		display: flex;
		align-items: center;
	}

	// Modificators

	&_rounded {
		border-radius: 50%;
	}

	// Types

	&_filled {
		border: none;
	}

	&_ghost {
		border: none;
		background-color: transparent;
	}

	&_outline {
		background-color: transparent;
	}

	// Colors

	&.disabled {
		cursor: default;
		color: rgba($color_black, .12);
		pointer-events: none;
	}

	&_filled-primary {
		background-color: $color_primary;
		color: $color_white;

		&:hover {
			background-color: $color_primary_alt;
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: rgba($color_primary, .8);
		}

		&.disabled {
			background-color: rgba($color_black, .02);
		}
	}

	&_filled-black {
		background-color: rgba($color_black, .48);
		color: $color_white;

		&:hover {
			background-color: rgba($color_black, .64);
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: rgba($color_black, .80);
		}

		&.disabled {
			background-color: rgba($color_black, .02);
		}
	}

	&_filled-secondary {
		background-color: $color_secondary;
		color: $color_black;

		&:hover {
			background-color: rgba($color_secondary, .64);
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: rgba($color_secondary, .80);
		}

		&.disabled {
			background-color: rgba($color_secondary, .02);
		}
	}

	&_filled-black {
		background-color: rgba($color_black, .48);
		color: $color_white;

		&:hover {
			background-color: rgba($color_black, .64);
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: rgba($color_black, .80);
		}

		&.disabled {
			background-color: rgba($color_black, .02);
		}
	}

	&_outline-primary {
		border: 1px solid $color_primary;
		background-color: transparent;
		color: $color_primary;

		&:hover {
			background-color: rgba($color_primary, .04);
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: rgba($color_primary, .12);
		}

		&.disabled {
			border-color: rgba($color_black, .12);
		}
	}

	&_outline-accent {
		border: 1px solid rgba($color_black, .12);
		background-color: $color_white;
		color: rgba($color_black, .48);

		&:hover {
			background-color: darken($color_white, 2%);
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: darken($color_white, 4%);
		}

		&.disabled {
			background-color: darken($color_white, 2%);
			border-color: rgba($color_black, .12);
		}
	}

	&_outline-black {
		border: 1px solid rgba($color_black, .12);
		background-color: $color_white;
		color: rgba($color_black, .8);

		&:hover {
			background-color: darken($color_white, 2%);
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: darken($color_white, 4%);
		}

		&.disabled {
			background-color: darken($color_white, 2%);
			border-color: rgba($color_black, .12);
		}
	}

	&_outline-black-transparent {
		border: 1px solid rgba($color_black, .12);
		background-color: transparent;
		color: rgba($color_black, .8);

		&:hover {
			background-color: darken($color_white, 2%);
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: darken($color_white, 4%);
		}

		&.disabled {
			background-color: darken($color_white, 2%);
			border-color: rgba($color_black, .12);
		}
	}

	&_ghost-primary {
		color: $color_primary;

		&:hover {
			background-color: rgba($color_primary, .04);
		}

		&:not(.disabled).active,
		&:not(.disabled):active {
			background-color: rgba($color_primary, .12);
		}
	}
}
</style>
