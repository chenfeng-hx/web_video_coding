<template>
	<div>
		<!-- 通过 ：，即 v-bind：的缩写将 age 的类型转换为 Number -->
		<Student name="李四" sex="女" :age="18"/>   
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
