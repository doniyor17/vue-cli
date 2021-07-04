<template>
    <div id="form">
        <div class="form-head">
            <slot name="form-heading"></slot>
        </div>
        <div class="form-inputs">
            <slot name="form-inputs"></slot>
        </div>
        <div class="form-controls">
            <slot name="form-controls"></slot>
        </div>
        <div class="form-result">
            <slot name="form-result"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
