export const menus = [
       {
        'name': 'POS',
        'icon': 'view_module',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Carrito',
                'icon': 'chat',
                'link': 'pages/shoppingcar',
                'open': false,
            },
            {
                'name': 'Productos',
                'icon': 'mail',
                'link': 'pages/products',
                'open': false,
            },
            {
                'name': 'Clientes',
                'icon': 'editor',
                'link': 'pages/clients',
                'open': false,
            },
            {
                'name': 'Consultas',
                'icon': 'view_list',
                'link': 'dashboard',
                'open': false,
            }
        ]
    }
    , {
        'name': 'TimeLog',
        'icon': 'content_copy',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Colaboradores',
                'icon': 'work',
                'open': false,
                'link': 'pages/employees',
            }, {
                'name': 'Departamentos',
                'icon': 'local_laundry_service',
                'open': false,
                'link': 'pages/departments',
            }, {
                'name': 'Horarios',
                'icon': 'directions',
                'open': false,
                'link': 'pages/schedules'
            },
            {
                'name': 'Reportes',
                'icon': 'directions',
                'open': false,
                'link': 'pages/timelog-reports'
            }
        ]
    }
    , {

        'name': 'ClassRoom',
        'icon': 'pie_chart_outlined',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Aula virtual',
                'icon': 'view_list',
                'link': 'pages/classroom',
                'open': false,

            },
            {
                'name': 'Instructores',
                'icon': 'work',
                'open': false,
                'link': 'pages/teachers',
            },
            {
                'name': 'Alta cursos',
                'icon': 'work',
                'open': false,
                'link': 'pages/courses',
            }
            ,
            {
                'name': 'Estudiantes',
                'icon': 'work',
                'open': false,
                'link': 'pages/students',
            }
        ]
    }
    , {

        'name': 'Project Manager',
        'icon': 'pie_chart_outlined',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Projects',
                'icon': 'view_list',
                'link': 'pages/projects',
                'open': false,

            },
            {
                'name': 'Team',
                'icon': 'work',
                'open': false,
                'link': 'pages/team',
            },
            {
                'name': 'Reports',
                'icon': 'work',
                'open': false,
                'link': 'pages/reports',
            }
            
        ]
    }, 
    {
        'name': 'Config',
        'open': false,
        'link': false,
        'icon': 'grade',
        'sub': [
            {
                'name': 'Empresa',
                'icon': 'chat',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'Certificados',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            }
        ]
    }
];