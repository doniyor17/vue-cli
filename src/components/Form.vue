<template>
    <div id="form" class="row">
        <div class="form-head col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <slot name="form-heading"></slot>
        </div>
        <div class="form-inputs col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <slot name="form-inputs"></slot>
        </div>
        <div
            class="form-controls col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
        >
            <slot name="form-controls"></slot>
        </div>
        <div class="form-result col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <slot name="form-result"></slot>
        </div>
    </div>
</template>
