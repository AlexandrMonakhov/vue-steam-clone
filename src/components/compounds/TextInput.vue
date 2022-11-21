<template>
	<div
		class="text-input"
		:class="className"
	>
		<div
			class="text-input__text-label"
			v-if="label"
		>
			<span>{{ label}}</span>
		</div>

		<label class="text-input__label">
			<div
				class="text-input__leading"
				v-if="leadingIcon"
			>
				<svg-icon :name="leadingIcon" />
			</div>

			<div class="text-input__input">
				<input
					class="text-input__input-item"
					:class="inputClassName"
					:name="name"
					:type="type"
					:placeholder="placeholder"
					:value="value"
					@input="$emit('input', $event.target.value)"
				/>
			</div>

			<div class="text-input__trailing">
				<div
					class="text-input__trailing-icon-cancel"
					v-if="isCancelButtonVisible"
				>
					<svg-icon
						name="cancel"
						@mousedown.prevent="$emit('cancel')"
					/>
				</div>

				<div
					class="text-input__trailing-icon"
					v-if="trailingIcon"
				>
					<svg-icon :name="trailingIcon" />
				</div>
			</div>
		</label>
	</div>
</template>

<script>
import SvgIcon from '@/components/atomics/SvgIcon.vue';

export default {
	name: 'TextInput',
	components: {
		SvgIcon,
	},
	props: {
		label: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		value: {
			type: [String, Number],
			default: '',
		},
		type: {
			type: String,
			default: 'text',
		},
		big: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: '',
		},
		leadingIcon: {
			type: String,
			default: '',
		},
		trailingIcon: {
			type: String,
			default: '',
		},
		withoutCancelButton: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		className() {
			return [
				this.big && `text-input_big`,
			]
		},
		inputClassName() {
			return [
				this.leadingIcon && `text-input__input-item_with-leading-icon`,
				this.trailingIcon && `text-input__input-item_with-trailing-icon`,
				this.big && `text-input__input-item_big`,
			]
		},
		isCancelButtonVisible() {
			return !this.withoutCancelButton && this.value.length > 0;
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.text-input {
	position: relative;
	min-width: 396px;

	&_big {
		min-width: 263px;
	}

	&__text-label {
		margin-bottom: 8px;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		color: $color_accent_alt;
	}

	&__label {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__leading {
		position: absolute;
		left: 16px;
	}

	&__trailing {
		position: absolute;
		right: 16px;
	}

	&__trailing-icon-cancel {
		cursor: pointer;
	}

	&__input {
		flex-grow: 1;

		&-item {
			width: 100%;
			padding: 17px 20px;
			font-style: italic;
			font-weight: 400;
			font-size: 12px;
			line-height: 15px;
			background-color: #37364B;
			color: $color_white;
			border-radius: 4px;
			border: none;

			&::placeholder {
				color: rgba($color_white, .5);
			}

			&_with-leading-icon {
				padding-left: 48px;
			}

			&_with-trailing-icon {
				padding-right: 48px;
			}

			&_big {
				font-style: normal;
				font-weight: 600;
				font-size: 12px;
				line-height: 15px;
				padding: 22px 20px;
			}
		}
	}
}
</style>
