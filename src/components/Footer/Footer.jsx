import style from "./style.module.css";
import logo from "../../assets/Images/logo.svg";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.footerLogo}>
          <img src={logo} alt="logo" />
          <p className={style.footerAdd}>
            
          </p>
        </div>
      </div>
      <div className={style.midFooter}>
        <ul className={style.footerLinks}>
          <h3>Integrations</h3>
          <li>Shopify</li>
          <li>Etsy</li>
          <li>eBay</li>
          <li>Amazon</li>
          <li>TikTok</li>
          <li>Shop</li>
          <li>PrestaShop</li>
          <li>BigCommerce</li>
          <li>Wix</li>
          <li>WooCommerce</li>
          <li>Squarespace</li>
          <li>Printify API</li>
          <li>Printify Pop-Up Store</li>
          <li>Shutterstock</li>
        </ul>
        <ul className={style.footerLinks}>
          <h3>Discover</h3>
          <li>Blog</li>
          <li>Guides</li>
          <li>Products</li>
          <li>Etsy print-on-demand</li>
          <li>Shopify print-on-demand</li>
          <li>Woocommerce print-on-demand</li>
          <li>Wix print-on-demand</li>
          <li>Squarespace print-on-demand</li>
          <li>Make Your Own Shirt</li>
          <li>Brands</li>
          <li>Pricing</li>
          <li>Shipping Rates</li>
          <li>Mockup Generator</li>
        </ul>
        <ul className={style.footerLinks}>
          <h3>Integrations</h3>
          <li>Shopify</li>
          <li>Etsy</li>
          <li>eBay</li>
          <li>Amazon</li>
          <li>TikTok</li>
          <li>Shop</li>
          <li>PrestaShop</li>
          <li>BigCommerce</li>
          <li>Wix</li>
          <li>WooCommerce</li>
          <li>Squarespace</li>
          <li>Printify API</li>
          <li>Printify Pop-Up Store</li>
          <li>Shutterstock</li>
        </ul>
        <ul className={style.footerLinks}>
          <h3>Integrations</h3>
          <li>Shopify</li>
          <li>Etsy</li>
          <li>eBay</li>
          <li>Amazon</li>
          <li>TikTok</li>
          <li>Shop</li>
          <li>PrestaShop</li>
          <li>BigCommerce</li>
          <li>Wix</li>
          <li>WooCommerce</li>
          <li>Squarespace</li>
          <li>Printify API</li>
          <li>Printify Pop-Up Store</li>
          <li>Shutterstock</li>
        </ul>
      </div>
      <div className={style.footerCopyright}>
        <hr />
        <p>© 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}
