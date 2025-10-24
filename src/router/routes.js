const routes = [
  /*{
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login-page.vue") }],
  },*/
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Panel-Card.vue") }],
  },
  {
    path: "/catalogo",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Catalogo_Cuentas.vue") },
    ],
  },
  {
    path: "/reportes",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Reportes-pdf.vue") }],
  },
  //reportes.
  {
    path: '/EstadoR',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Estado-R-repo.vue') }
    ]
  },
  {
    path: '/Balance',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Balance-repo.vue') }
    ]
  },
  {
    path: '/Ahorizontal',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Analisis-Horizontal.vue') }
    ]
  },
  {
    path: '/AVertical',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Analisis-Vertical.vue') }
    ]
  },
  {
    path: '/Dupont',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dupont-anf.vue') }
    ]
  },
  {
    path: '/Ratios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Ratios-all.vue') }
    ]
  },
  {
    path: '/transaccion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Transacciones-p.vue') }
    ]
  },
  {
    path: '/editar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Editar-data.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
