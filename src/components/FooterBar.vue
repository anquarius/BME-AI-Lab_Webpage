<template>
    <div class="footer-container">
        <div class="logo">
            <a href="https://www.polyu.edu.hk/bme/">
                <img src="../assets/polyu-logo.png" />
            </a>
            <a href="https://www.polyu.edu.hk/bme/">
                <img src="../assets/bmedept-logo.png" />
            </a>
        </div>
        <div class="info">
            <p>&copy; 2023 BME AI Lab</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer-container {
    display: flex;
    height: 150px;
    width: 100%;
    border-top: 1px solid;
    justify-content: center;
    background-color: rgb(229, 229, 229);
}

.logo {
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
    align-items: right;

    a {
        border: none;

        img {
            max-width: 100%; 
        }
    }
    
}

.info {
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: end;
}


</style>
