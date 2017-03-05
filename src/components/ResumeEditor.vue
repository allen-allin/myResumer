<template>
	<div id="resumeEditor">
		<nav>
			<ol>
				<li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
					<svg class="icon">
						<use :xlink:href="`#icon-${item.icon}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="panels">
			<li v-for="(item,index) in resume.config" v-show="selected === item.field">
				<div v-if="resume[item.field] instanceof Array">
					<div class="subitem" v-for="subitem in resume[item.field]">
						<div class="resumeFiled" v-for="(value,key) in subitem">
							<label>{{key}}</label>
							<input type="text" v-model="subitem[key]">					
						</div>
						<hr>
					</div>
				</div>
				<div v-else>
					<div class="resumeFiled" v-for="(value,key) in resume[item.field]">
						<label>{{key}}</label>						
						<input type="text" v-model="resume[item.field][key]">
					</div>
				</div>
			</li>
		</ol>
	</div>
</template>
<script>
	export default {
		computed: {
			selected: {
				get() {
					return this.$store.state.selected
				},
				set(value) {
					return this.$store.commit('switchTab',value)
				}			
			},
			resume() {
				return this.$store.state.resume
			}
		}
	}
</script>
<style lang="scss" scoped>
	#resumeEditor {
		background:#ffffff;
	 	box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
	 	display: flex;
	 	nav {
	 		width: 80px;
	 		background: black;
	 		color: white;
			ol {
				li {
					height: 48px;
					/* line-height: 48px;
					 text-align: center; */ 
					 display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 16px;
					margin-bottom: 16px; 
					&.active {
						background: white;
						color: black;
					}
				}
			}
	 	}
	 	.panels {
	 		flex:1;
	 		>li {
	 			padding: 24px;
	 		}
	 	}
	 	svg.icon {
	 		width: 24px;
	 		height: 24px;
	 	}
	 	ol {
	 		list-style: none;
	 	}
	 	.resumeFiled {
	 		label {
	 			display: block;
	 		}
	 		input {
		        margin: 16px 0;
		        border: 1px solid #ddd;
		        width: 100%;
		        height: 40px;
		        box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
		        padding: 0 8px;				
	 		}
	 	}
	 	hr {
	 		margin: 30px 0;
	 	}
	}
</style>