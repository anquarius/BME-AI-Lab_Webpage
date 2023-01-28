<template>
    <div class="access-container">
        <a href="https://www.polyu.edu.hk/bme/bme1d02/" class="access">BME1D02</a>
        <span class="border">|</span>
        <a class="access">Login</a>
    </div>
</template>

<style scoped lang="scss">
.access-container {
    display: flex;
    height: 30px;
    background-color: rgb(0, 0, 0);
    justify-content: right;
    align-items: center;
    padding-right: 20px;

    .access {
        // height: 100%;
        color: rgb(255, 255, 255);
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 0;
    }
    .border {
        color: rgb(255, 255, 255);
        font-weight: 700;
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>