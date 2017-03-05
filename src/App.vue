<template>

	<div class="page">
		<header>
			<TopBar/>
		</header>
		<main>
			<ResumeEditor/>
			<ResumePreview/>
		</main>
	</div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import TopBar from './components/TopBar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons.js'
import store from './store/index'


export default {
	name: 'app',
	store,
	components: {
		TopBar,ResumePreview,ResumeEditor
	},
	created() {
		document.body.insertAdjacentHTML('afterbegin',icons);  
	}
}
</script>

<style lang="scss">

.page {
	display: flex;
	height: 100vh;
	flex-direction: column;
	background: #eaebec;
	>main {
		display: flex;
		flex: 1;
		min-width: 1024px;
		max-width: 1440px;
		justify-content: space-between;
		align-self: center;
		padding: 0 16px;
		/*margin: 16px auto;*/
		width: 100%;
		margin-top: 16px;
		margin-bottom: 16px;
	}
}
#resumeEditor {
	min-width: 35%;
}
#resumePreview {
	flex: 1;
	margin-left: 16px;
}
svg.icon{
   height: 1em;
   width: 1em;
   fill: currentColor;
   vertical-align: -0.1em;
   font-size:16px;
 }
</style>
