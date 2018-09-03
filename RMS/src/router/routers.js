import Main from '@/view/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    meta: {
      icon: 'logo-buffer',
      title: '首页'
    },
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
    {
    path: '/information',
    name: 'information',
    meta: {
      icon: 'logo-buffer',
      title: '基础信息'
    },
    component: Main,
    children: [
      {
        path: 'company_information',
        name: 'company_information',
        meta: {
          icon: 'md-trending-up',
          title: '公司信息维护'
        },
        component: () => import('@/view/information/company-information/company-information.vue')
      },
      {
        path: 'store',
        name: 'store',
        meta: {
          icon: 'ios-infinite',
          title: '门店管理'
        },
        component: () => import('@/view/information/store/store.vue')
      },
      {
        path: 'department',
        name: 'department',
        meta: {
          icon: 'md-grid',
          title: '公司部门管理'
        },
        component: () => import('@/view/information/department/department.vue')
      },
      {
        path: 'customer',
        name: 'customer',
        meta: {
          icon: 'md-pause',
          title: '大客户管理'
        },
        component: () => import('@/view/information/customer/customer.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          icon: 'logo-markdown',
          title: '用户管理'
        },
        component: () => import('@/view/information/user/user.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: '供应商管理'
        },
        component: () => import('@/view/information/supplier/supplier.vue')
      },
      {
        path: 'printer',
        name: 'printer',
        meta: {
          icon: '_bear',
          title: '打印设置'
        },
        component: () => import('@/view/information/printer/printer.vue')
      },
      {
        path: 'cash-register',
        name: 'cash-register',
        meta: {
          icon: 'logo-markdown',
          title: '收银机配置'
        },
        component: () => import('@/view/information/cash-register/cash-register.vue')
      },
      {
        path: 'template',
        name: 'template',
        meta: {
          icon: 'ios-create',
          title: '模板设置'
        },
        component: () => import('@/view/information/template/template.vue')
      },
      {
        path: 'pay',
        name: 'pay',
        meta: {
          icon: '_bear',
          title: '支付方式'
        },
        component: () => import('@/view/information/pay/pay.vue')
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    meta: {
      icon: 'logo-buffer',
      title: '商品'
    },
    component: Main,
    children: [
      {
        path: 'management',
        name: 'management',
        meta: {
          icon: 'md-trending-up',
          title: '商品管理'
        },
        component: () => import('@/view/goods/management/management.vue')
      },
      {
        path: 'modify_price',
        name: 'modify_price',
        meta: {
          icon: 'ios-infinite',
          title: '商品调价'
        },
        component: () => import('@/view/goods/modify-price/modify-price.vue')
      }
    ]
  },
  {
    path: '/sales',
    name: 'sales',
    meta: {
      icon: 'logo-buffer',
      title: '销售管理'
    },
    component: Main,
    children: [
      {
        path: 'coupons',
        name: 'coupons',
        meta: {
          icon: 'md-trending-up',
          title: '礼券'
        },
        component: () => import('@/view/sales/coupons/coupons.vue')
      },
      {
        path: 'card',
        name: 'card',
        meta: {
          icon: 'ios-infinite',
          title: '卡'
        },
        component: () => import('@/view/sales/card/card.vue')
      },
      {
        path: 'sales_promotion',
        name: 'sales_promotion',
        meta: {
          icon: 'ios-infinite',
          title: '单品促销'
        },
        component: () => import('@/view/sales/sales-promotion/sales-promotion.vue')
      },
      {
        path: 'package_promotion',
        name: 'package_promotion',
        meta: {
          icon: 'ios-infinite',
          title: '套餐促销'
        },
        component: () => import('@/view/sales/package-promotion/package-promotion.vue')
      },
      {
        path: 'full_reduction_promotion',
        name: 'full_reduction_promotion',
        meta: {
          icon: 'ios-infinite',
          title: '满减/送促销'
        },
        component: () => import('@/view/sales/full-reduction-promotion/full-reduction-promotion.vue')
      },
      {
        path: 'customer_maintenance',
        name: 'customer_maintenance',
        meta: {
          icon: 'ios-infinite',
          title: '客群维护'
        },
        component: () => import('@/view/sales/customer-maintenance/customer-maintenance.vue')
      }
    ]
  },
  {
    path: '/member',
    name: 'member',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'member',
        name: 'member',
        meta: {
          icon: 'ios-hammer',
          title: '会员'
        },
        component: () => import('@/view/member/member.vue')
      }
    ]
  },
  {
    path: '/storehouse',
    name: 'storehouse',
    meta: {
      icon: 'logo-buffer',
      title: '仓库管理'
    },
    component: Main,
    children: [
      {
        path: 'purchase_order',
        name: 'purchase_order',
        meta: {
          icon: 'md-trending-up',
          title: '采购单'
        },
        component: () => import('@/view/storehouse/purchase-order/purchase-order.vue')
      },
      {
        path: 'materials_storehouse',
        name: 'materials_storehouse',
        meta: {
          icon: 'ios-infinite',
          title: '原料库管理'
        },
        component: () => import('@/view/storehouse/materials-storehouse/materials-storehouse.vue')
      },
      {
        path: 'product_storehouse',
        name: 'product_storehouse',
        meta: {
          icon: 'ios-infinite',
          title: '成品库管理'
        },
        component: () => import('@/view/storehouse/product-storehouse/product-storehouse.vue')
      }
    ]
  },
  {
    path: '/report',
    name: 'report',
    meta: {
      icon: 'logo-buffer',
      title: '报表中心'
    },
    component: Main,
    children: [
      {
        path: 'transaction_profile',
        name: 'transaction_profile',
        meta: {
          icon: 'md-trending-up',
          title: '交易概况'
        },
        component: () => import('@/view/report/transaction-profile/transaction-profile.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
]
