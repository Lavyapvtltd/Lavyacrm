import React, { useEffect, useState } from "react";
import Router from "next/router";
const Navdata = () => {
  //state data
  const [isAuth, setIsAuth] = useState(false);
  const [products, setProducts] = useState(false);
  const [accounting, setAccounting] = useState(false);
  const [bottleBreak, setBottle] = useState(false);
  const [vendor, setVendor] = useState(false);
  const [user, setUser] = useState(false);
  const [vacations,setVacations] = useState(false);
  const [categories, setCategories] = useState(false);
  const [order, setOrder] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [location, setLocation] = useState(false);
  const [recharge, setRecharge] = useState(false);
  const [firsttimerecharge, setfirsttimeRecharge] = useState(false);
  const [testimonial,setTestimonial] = useState(false);
  const [contactForm,setContactForm] = useState(false);
  const [subscribeMail,setSubscibeMail] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  // Authentication
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordCreate, setIsPasswordCreate] = useState(false);
  const [isLockScreen, setIsLockScreen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hub, setHub] = useState(false);
  const [partner, setPartner] = useState(false);
  const [banner, setBanner] = useState(false);
  const [membership, setMembership] = useState(false);
  const [city, setCity] = useState(false);
  const [content, setContent] = useState(false);
  const [stock, setStock] = useState(false);
  const [offer, setOffer] = useState(false);
  // Pages
  const [isProfile, setIsProfile] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);

  const [isCurrentState, setIsCurrentState] = useState("");

  function updateIconSidebar(e: any) {
    if (e && e.target && e.target.getAttribute("sub-items")) {
      const ul: any = document.getElementById("two-column-menu");
      const iconItems: any = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id: any = item.getAttribute("sub-items");
        var menusId = document.getElementById(id);
        if (menusId) {
          (menusId.parentElement as HTMLElement).classList.remove("show");
        }
      });
      e.target.classList.add("active");
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (isCurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (isCurrentState !== "Accounting") {
      setProducts(false);
    }
    if (isCurrentState !== "User") {
      setProducts(false);
    }
    if (isCurrentState !== "Vendor") {
      setProducts(false);
    }
    if (isCurrentState !== "BottleBreak") {
      setProducts(false);
    }
    if (isCurrentState !== "Products") {
      setProducts(false);
    }
    if (isCurrentState !== "Categories") {
      setCategories(false);
    }
    if (isCurrentState !== "Order") {
      setIsPages(false);
    }
    if (isCurrentState !== "location") {
      setIsPages(false);
    }
    if (isCurrentState !== "hub") {
      setIsPages(false);
    }
    if (isCurrentState !== "partner") {
      setIsPages(false);
    }
    if (isCurrentState !== "city") {
      setIsPages(false);
    }
    if (isCurrentState !== "content") {
      setIsPages(false);
    }
    if (isCurrentState !== "stock") {
      setIsPages(false);
    }
    if (isCurrentState !== "offer") {
      setIsPages(false);
    }
    if (isCurrentState !== "membership") {
      setIsPages(false);
    }
    if (isCurrentState !== "delivery") {
      setIsPages(false);
    }
    if (isCurrentState !== "recharge") {
      setIsPages(false);
    }
    if (isCurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (isCurrentState === "Dashboard") {
      Router.push("/dashboard");
      document.body.classList.add("twocolumn-panel");
    }
    if (isCurrentState === "Widgets") {
      Router.push("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (isCurrentState === "Calendar") {
      Router.push("/calendar");
      document.body.classList.add("twocolumn-panel");
    }
    if (isCurrentState === "API Key") {
      Router.push("/api-key");
      document.body.classList.add("twocolumn-panel");
    }
    if (isCurrentState === "Contact") {
      Router.push("/contact");
      document.body.classList.add("twocolumn-panel");
    }
    if (isCurrentState === "Leaderboard") {
      Router.push("/leaderboard");
      document.body.classList.add("twocolumn-panel");
    }
    if (isCurrentState === "Components") {
      Router.push("https://lavya-backend-components.vercel.app/");
      document.body.classList.add("twocolumn-panel");
    }
  }, [isCurrentState, isAuth, isPages, isMultiLevel]);

  const menuItems: any = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "bi bi-speedometer2",
      link: "/dashboard",
      click: function (e: any) {
        e.preventDefault();
        setIsCurrentState("Dashboard");
      },
    },
    {
      label: "Pages",
      isHeader: true,
    },
    {
      id: "User-Detail",
      label: "User-Detail",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setUser(!user);
        setIsCurrentState("User");
        updateIconSidebar(e);
      },
      stateVariables: user,
      subItems: [
        {
          id: "User-Detail",
          label: "User-Detail",
          link: "/user",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "User",
          stateVariables: isSignIn,
        },
      ],
    },
    {
      id: "user-vacations",
      label: "User Vacations",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setVacations(!vacations);
        setIsCurrentState("Vactions");
        updateIconSidebar(e);
      },
      stateVariables: vacations,
      subItems: [
        {
          id: "user-vacations",
          label: "User Vacations",
          link: "/user-vacations",
          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Vactions",
          stateVariables: isSignIn,
        },
      ],
    },
    {
      id: "vendor",
      label: "Vendor",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setVendor(!vendor);
        setIsCurrentState("Vendor");
        updateIconSidebar(e);
      },
      stateVariables: vendor,
      subItems: [
        {
          id: "vendor",
          label: "Vendor",
          link: "/vendor",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Vendor",
          stateVariables: isSignIn,
        },
      ],
    },
    {
      id: "bottle",
      label: "Bottle Break",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setBottle(!bottleBreak);
        setIsCurrentState("BottleBreak");
        updateIconSidebar(e);
      },
      stateVariables: bottleBreak,
      subItems: [
        {
          id: "bottle",
          label: "Bottle Break",
          link: "/bottle-break",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "bottle",
          stateVariables: isSignIn,
        },
      ],
    },
    {
      id: "Accounting",
      label: "Accounting",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setAccounting(!accounting);
        setIsCurrentState("Accounting");
        updateIconSidebar(e);
      },
      stateVariables: accounting,
      subItems: [
        {
          id: "accounting",
          label: "Accounting",
          link: "/accounting",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        }, 
        {
          id: "totalSalewithoutVip",
          label: "Total Sale Without VIP",
          link: "/accounting/total-sale-without-vip",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        },
        {
          id: "totalSalewithVip",
          label: "Total Sale With VIP",
          link: "/accounting/total-sale-with-vip",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        },
        {
          id: "totalAmountRecieved",
          label: "Total amount Received by company",
          link: "/accounting/total-amount-received-by-company",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        },
        {
          id: "totalAmountRefund",
          label: "Total amount Refund by company",
          link: "/accounting/total-amount-refund-by-company",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        },
        {
          id: "totalOfferBalance",
          label: "Total Offer Balance by company",
          link: "/accounting/total-offer-balance-by-company",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        },
        {
          id: "purchase",
          label: "Purchase by Company",
          link: "/accounting/purchase",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        }, 
        {
          id: "expenses",
          label: "Expenses",
          link: "/accounting/expenses",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        },
        {
          id: "tax",
          label: "Tax",
          link: "/accounting/tax",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Accounting",
          stateVariables: isSignIn,
        },
      ],
    },
    {
      id: "Products",
      label: "Products",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setProducts(!products);
        setIsCurrentState("Products");
        updateIconSidebar(e);
      },
      stateVariables: products,
      subItems: [
        {
          id: "addproducts",
          label: "Product",
          link: "/product",

          click: function (e: any) {
            e.preventDefault();
            setIsSignIn(!isSignIn);
          },
          parentId: "Products",
          stateVariables: isSignIn,
        },
      ],
    },

    {
      id: "Categories",
      label: "Categories",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setCategories(!categories);
        setIsCurrentState("categories");
        updateIconSidebar(e);
      },
      stateVariables: categories,
      subItems: [
        {
          id: "categories",
          label: "Category",
          link: "/category",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Categories",
          stateVariables: isSignUp,
        },
        {
          id: "sub-categories",
          label: "Sub-Category",
          link: "/sub-category",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Categories",
          stateVariables: isSignUp,
        },
      ],
    },
    {
      id: "Orders",
      label: "Orders",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setOrder(!order);
        setIsCurrentState("order");
        updateIconSidebar(e);
      },
      stateVariables: order,
      subItems: [
        {
          id: "order",
          label: "All Orders",
          link: "/order",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "new-order",
          label: "New Orders",
          link: "/order/new-order",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "assigned-order",
          label: "Asssigned Orders",
          link: "/order/assigned-order",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "pending-order",
          label: "Pending",
          link: "/order/pending-order",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "subscribed-order",
          label: "Subscribed Orders",
          link: "/order/subscribed-order",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "delivered-order",
          label: "Delivered Orders",
          link: "/order/delivered-order",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "cancelled-by-user-order",
          label: "User cancelled Orders",
          link: "/order/cancelled-by-user-order",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "cancelled-by-delivery-partner",
          label: "Partner cancelled Orders",
          link: "/order/cancelled-by-delivery-partner",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "cancelled-by-admin",
          label: "Admin cancelled Orders",
          link: "/order/cancelled-by-admin-order",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
        {
          id: "delivered-subscription",
          label: "Delivered Subcription",
          link: "/order/delivered-subscription",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Orders",
          stateVariables: isSignUp,
        },
      ],
    },
    {
      id: "Delivery",
      label: "Delivery details",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setDelivery(!delivery);
        setIsCurrentState("delivery");
        updateIconSidebar(e);
      },
      stateVariables: delivery,
      subItems: [
        {
          id: "order",
          label: "All Orders",
          link: "/delivery-details",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Delivery",
          stateVariables: isSignUp,
        },
      ],
    },
    {
      id: "Locations",
      label: "Locations",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setLocation(!location);
        setIsCurrentState("location");
        updateIconSidebar(e);
      },
      stateVariables: location,
      subItems: [
        {
          id: "Cities",
          label: "Cities",
          link: "/location",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Locations",
          stateVariables: "Locations",
        },
        // {
        //   id: "sub-categories",
        //   label: "Sub-Category",
        //   link: "/sub-category",
        //   click: function (e: any) {
        //     e.preventDefault();
        //     setIsSignUp(!isSignUp);
        //   },
        //   parentId: "Categories",
        //   stateVariables: isSignUp,
        // },
      ],
    },
    {
      id: "Hub",
      label: "Hub",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setHub(!hub);
        setIsCurrentState("hub");
        updateIconSidebar(e);
      },
      stateVariables: hub,
      subItems: [
        {
          id: "hub",
          label: "hub",
          link: "/hub",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Locations",
          stateVariables: "Locations",
        },
        // {
        //   id: "sub-categories",
        //   label: "Sub-Category",
        //   link: "/sub-category",
        //   click: function (e: any) {
        //     e.preventDefault();
        //     setIsSignUp(!isSignUp);
        //   },
        //   parentId: "Categories",
        //   stateVariables: isSignUp,
        // },
      ],
    },
    {
      id: "Partner",
      label: "Partner",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setPartner(!hub);
        setIsCurrentState("partner");
        updateIconSidebar(e);
      },
      stateVariables: partner,
      subItems: [
        {
          id: "partner",
          label: "partner",
          link: "/partner",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Partner",
          stateVariables: "Partner",
        },
        // {
        //   id: "sub-categories",
        //   label: "Sub-Category",
        //   link: "/sub-category",
        //   click: function (e: any) {
        //     e.preventDefault();
        //     setIsSignUp(!isSignUp);
        //   },
        //   parentId: "Categories",
        //   stateVariables: isSignUp,
        // },
      ],
    },
    {
      id: "City",
      label: "City",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setCity(!city);
        setIsCurrentState("city");
        updateIconSidebar(e);
      },
      stateVariables: city,
      subItems: [
        {
          id: "city",
          label: "city",
          link: "/city",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "City",
          stateVariables: "City",
        },
      ],
    },
    {
      id: "Content",
      label: "Content",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setContent(!content);
        setIsCurrentState("content");
        updateIconSidebar(e);
      },
      stateVariables: content,
      subItems: [
        {
          id: "content",
          label: "content",
          link: "/content",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Content",
        },
      ],
    },

    {
      id: "stock-management",
      label: "Stock Management",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setStock(!stock);
        setIsCurrentState("stock");
        updateIconSidebar(e);
      },
      stateVariables: stock,
      subItems: [
        {
          id: "stock",
          label: "Stocks",
          link: "/stock-management",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "stock-management",
          stateVariables: isSignUp,
        },
        // {
        //   id: "sub-categories",
        //   label: "Sub-Category",
        //   link: "/sub-category",
        //   click: function (e: any) {
        //     e.preventDefault();
        //     setIsSignUp(!isSignUp);
        //   },
        //   parentId: "Categories",
        //   stateVariables: isSignUp,
        // },
      ],
    },

    {
      id: "Offer-creation",
      label: "Offer",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setOffer(!offer);
        setIsCurrentState("offer");
        updateIconSidebar(e);
      },
      stateVariables: offer,
      subItems: [
        {
          id: "offer",
          label: "offer",
          link: "/offer",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Offer-creation",
          stateVariables: "Offer-creation",
        },
      ],
    },
    {
      id: "Upload-Banner",
      label: "Banner",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setBanner(!banner);
        setIsCurrentState("banner");
        updateIconSidebar(e);
      },
      stateVariables: banner,
      subItems: [
        {
          id: "banner",
          label: "banner",
          link: "/banner",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Upload-Banner",
          stateVariables: "Upload-Banner",
        },
      ],
    },
    {
      id: "Membership",
      label: "membership",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setMembership(!membership);
        setIsCurrentState("membership");
        updateIconSidebar(e);
      },
      stateVariables: membership,
      subItems: [
        {
          id: "membership",
          label: "membership",
          link: "/membership",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Membership",
          stateVariables: "Membership",
        },
      ],
    },
    {
      id: "Recharge",
      label: "Recharge Offer",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setRecharge(!recharge);
        setIsCurrentState("recharge");
        updateIconSidebar(e);
      },
      stateVariables: recharge,
      subItems: [
        {
          id: "recharge",
          label: "recharge",
          link: "/recharge",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "Recharge",
          stateVariables: "Recharge",
        },
      ],
    },
     {
      id: "first_time_recharge",
      label: "First Time Recharge",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setfirsttimeRecharge(!firsttimerecharge);
        setIsCurrentState("first_time_recharge");
        updateIconSidebar(e);
      },
      stateVariables: firsttimerecharge,
      subItems: [
        {
          id: "first_time_recharge",
          label: "First Time Recharge",
          link: "/first-time-recharge",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "First_time_Recharge",
          stateVariables: "First_time_Recharge",
        },
      ],
    },
    {
      id: "testimonials",
      label: "Testimonial",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setTestimonial(!testimonial);
        setIsCurrentState("testimonials");
        updateIconSidebar(e);
      },
      stateVariables: testimonial,
      subItems: [
        {
          id: "testimonial",
          label: "Testimonial",
          link: "/testimonial",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "testimonial",
          stateVariables: "testimonial",
        },
      ],
    },
    {
      id: "contactform",
      label: "ContactForms",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setContactForm(!contactForm);
        setIsCurrentState("contactform");
        updateIconSidebar(e);
      },
      stateVariables: contactForm,
      subItems: [
        {
          id: "contactform",
          label: "contactforms",
          link: "/contact-form",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "contactform",
          stateVariables: "contactform",
        },
      ],
    },
    {
      id: "subscribemail",
      label: "SubscribeMails",
      icon: "bi bi-person-circle",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setSubscibeMail(!subscribeMail);
        setIsCurrentState("subscribemail");
        updateIconSidebar(e);
      },
      stateVariables: subscribeMail,
      subItems: [
        {
          id: "subscribemail",
          label: "SubscribeMails",
          link: "/subscribe-mail",
          click: function (e: any) {
            e.preventDefault();
            setIsSignUp(!isSignUp);
          },
          parentId: "subscribemail",
          stateVariables: "subscribemail",
        },
      ],
    },
    // {
    //   id: "pages",
    //   label: "Pages",
    //   icon: "bi bi-journal-medical",
    //   link: "/#",
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsPages(!isPages);
    //     setIsCurrentState("Pages");
    //     updateIconSidebar(e);
    //   },
    //   stateVariables: isPages,
    //   subItems: [
    //     {
    //       id: "starter",
    //       label: "Starter",
    //       link: "/pages/starter",
    //       parentId: "pages",
    //     },
    //     {
    //       id: "profile",
    //       label: "Profile",
    //       link: "/#",
    //       isChildItem: true,
    //       click: function (e: any) {
    //         e.preventDefault();
    //         setIsProfile(!isProfile);
    //       },
    //       parentId: "pages",
    //       stateVariables: isProfile,
    //       childItems: [
    //         {
    //           id: 1,
    //           label: "Simple Page",
    //           link: "/pages/profile/page",
    //           parentId: "pages",
    //         },
    //         {
    //           id: 2,
    //           label: "Settings",
    //           link: "/pages/profile/settings",
    //           parentId: "pages",
    //         },
    //       ],
    //     },
    //     { id: "team", label: "Team", link: "/pages/team", parentId: "pages" },
    //     {
    //       id: "timeline",
    //       label: "Timeline",
    //       link: "/pages/timeline",
    //       parentId: "pages",
    //     },
    //     { id: "faqs", label: "FAQs", link: "/pages/faqs", parentId: "pages" },
    //     {
    //       id: "pricing",
    //       label: "Pricing",
    //       link: "/pages/pricing",
    //       parentId: "pages",
    //     },
    //     {
    //       id: "maintenance",
    //       label: "Maintenance",
    //       link: "/pages/maintenance",
    //       parentId: "pages",
    //     },
    //     {
    //       id: "comingSoon",
    //       label: "Coming Soon",
    //       link: "/pages/coming-soon",
    //       parentId: "pages",
    //     },
    //     {
    //       id: "sitemap",
    //       label: "Sitemap",
    //       link: "/pages/sitemap",
    //       parentId: "pages",
    //     },
    //     {
    //       id: "searchResults",
    //       label: "Search Results",
    //       link: "/pages/search-results",
    //       parentId: "pages",
    //     },
    //   ],
    // },
    // {
    //   id: "widgets",
    //   label: "Widgets",
    //   icon: "bi bi-hdd-stack",
    //   link: "/widgets",
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsCurrentState("Widgets");
    //   },
    // },
    // {
    //   id: "components",
    //   label: "Components",
    //   icon: "bi bi-layers",
    //   isBlankLink: true,
    //   link: "https://lavya-backend-components.vercel.app/",
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsCurrentState("Components");
    //   },
    // },
    // {
    //   label: "Apps",
    //   isHeader: true,
    // },
    // {
    //   id: "calendar",
    //   label: "Calendar",
    //   icon: "bi bi-calendar3",
    //   link: "/calendar",
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsCurrentState("Calendar");
    //   },
    // },
    // {
    //   id: "api-key",
    //   label: "API Key",
    //   icon: "bi bi-key",
    //   link: "/api-key",
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsCurrentState("API Key");
    //   },
    // },
    // {
    //   id: "contact",
    //   label: "Contact",
    //   icon: "bi bi-person-square",
    //   link: "/contact",
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsCurrentState("Contact");
    //   },
    // },
    // {
    //   id: "leaderboard",
    //   label: "Leaderboard",
    //   icon: "bi bi-gem",
    //   link: "/leaderboard",
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsCurrentState("Leaderboard");
    //   },
    // },
    // {
    //   label: "Layouts",
    //   isHeader: true,
    // },
    // {
    //   id: "multilevel",
    //   label: "Multi Level",
    //   icon: "bi bi-share",
    //   link: "/#",
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsMultiLevel(!isMultiLevel);
    //     setIsCurrentState("MuliLevel");
    //     updateIconSidebar(e);
    //   },
    //   stateVariables: isMultiLevel,
    //   subItems: [
    //     {
    //       id: "level1.1",
    //       label: "Level 1.1",
    //       link: "/#",
    //       parentId: "multilevel",
    //     },
    //     {
    //       id: "level1.2",
    //       label: "Level 1.2",
    //       link: "/#",
    //       isChildItem: true,
    //       click: function (e: any) {
    //         e.preventDefault();
    //         setIsLevel1(!isLevel1);
    //       },
    //       stateVariables: isLevel1,
    //       childItems: [
    //         { id: 1, label: "Level 2.1", link: "/#" },
    //         {
    //           id: "level2.2",
    //           label: "Level 2.2",
    //           link: "/#",
    //           isChildItem: true,
    //           click: function (e: any) {
    //             e.preventDefault();
    //             setIsLevel2(!isLevel2);
    //           },
    //           stateVariables: isLevel2,
    //           childItems: [
    //             { id: 1, label: "Level 3.1", link: "/#" },
    //             { id: 2, label: "Level 3.2", link: "/#" },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
