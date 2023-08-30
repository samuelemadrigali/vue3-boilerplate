<template>
  <div class="w-full relative">
    <input
      v-bind="$attrs"
      :ref="$attrs.type"
      class="p-2 border-gray-300 border-[1px] rounded-md w-full"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <span v-if="error" class="text-sm text-red-500">{{ error }}</span>
  </div>
</template>

<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false,
};
</script>

<script setup>
defineProps({
  modelValue: String,
  error: String,
});

defineEmits(["update:modelValue", "blur"]);
</script>
