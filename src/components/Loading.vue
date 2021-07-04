<template>
    <div class="loading">
        <div class="spinner">
            <div class="small-wrapper"></div>
        </div>
    </div>
</template>

<style scoped>
.loading {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
}
.spinner {
    width: 250px;
    height: 15px;
    position: relative;
    padding: 1px;
    background-color: rgb(130, 132, 241);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
}
.small-wrapper {
    width: 50px;
    height: 10px;
    position: absolute;
    top: 20%;
    transform-origin: center center;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    animation: spin infinite ease-in-out 1s;
}
@keyframes spin {
    0% {
        transform: translateX(0);
    }
    12.5% {
        transform: translateX(50px);
    }
    25% {
        transform: translateX(100px);
    }
    37.5% {
        transform: translateX(150px);
    }
    50% {
        transform: translateX(200px);
    }
    62.5% {
        transform: translateX(150px);
    }
    75% {
        transform: translateX(100px);
    }
    87.5% {
        transform: translateX(50px);
    }
    100% {
        transform: translateX(0px);
    }
}
</style>
