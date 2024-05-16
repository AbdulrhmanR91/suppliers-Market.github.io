const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/logo subb.png" class="logo" alt="">
    </div>
    <p class="footer-title">about company</p>
    <p id="info"> we solve The problem of the lack of efficient and centralized platforms that connect suppliers with big markets and provide a comprehensive view of prices. Many suppliers struggle to reach large markets and face challenges in showcasing their products effectively. At the same time, buyers often find it difficult to discover reliable suppliers and compare prices across different options</p>
    <p class="info">support emails - help@Supplier's Market.com, customersupport@Supplier's Market.com,</p>
    <p class="info">telephone - 00000 , 12345</p>
    <div class="footer-social-container">

        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit"></p>
    `;
}

createFooter();