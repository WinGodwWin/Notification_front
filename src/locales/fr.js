export default {
    dataIterator: {
        rowsPerPageText: "Élements par page:",
        rowsPerPageAll: "Tous",
        pageText: "{0}-{1} de {2}",
        noResultsText: "Aucun enregistrement correspondant trouvé",
        nextPage: "Page suivante",
        prevPage: "Page précédente"
    },
    dataTable: {
        rowsPerPageText: "Lignes par page:"
    },
    noDataText: "Aucune donnée disponible",
    carousel: {
        prev: "Visuel précédent",
        next: "Visuel suivant"
    },
    badpassword: "Username ou mot de passe incorrects",
    errorOccured: "Erreur survenue",
    errorForm: "Le formulaire contient des erreurs",
    about: "Details",
    errorExist: "Ce nom existe déjà",
    errorNum: "Ce numéro existe déjà",
    confirm_delete: "Êtes vous sûre de vouloir supprimer ?",
    yes: "Oui",
    no: "Non",
    cancel: "Annuler",
    close: "Fermer",
    clear: "Effacer",
    deleted: "Element supprimé",
    range_date: "Du {0} au {1}",
    filter: "Filtrer",
    roles: {
        ROLE_SUPER_ADMIN: "Super administrateur",
        ROLE_ADMIN: "Administrateur",
        ROLE_USER: "Utilisateur"
    },
    enabled: {
        activated: "Activé",
        deactivated: "Désactivé"
    },
    edit: "Modifier",
    details: "Détails",
    delete: "Supprimer",
    refresh: "Actualiser",
    save: "Enregistrer",
    send: "Envoyer",
    update: "Mettre à jour",
    app: {
        title: "NOTIFICATION APP"
    },
    menu: {
        dashboard: "Dashboard",
        logout: "Déconnexion",
        login: "Connexion",
        about: "About",
        user: {
            title: "Utilisateur"
        },
        contact: {
            title: "Contacts"
        },
        group_contact: {
            title: "Groupe de contacts"
        },
        templategroup: {
            title: "Groupe template"
        },
        template: {
            title: "Templates"
        },
        notification: {
            title: "Notification"
        },
        balance: {
            title: "Approvisionnement"
        },
        statistic: {
            title: "Statistique"
        }
    },
    templategroup: {
        title: "Groupe template",
        add: {btn: "Nouveau groupe", title: "Ajouter un nouveau groupe"},
        edit: {
            title: "Modifier le groupe"
        },
        form: {
            label: {
                title: "Nom",
                required: "Nom requis",
                maxLength: "Nom trop long. {0} caractères max autorisés",
                already_exist: "Nom déja existant"
            },
            description: {
                title: "Description",
                required: "Description requise",
                maxLength: "Description trop longue. {0} caractères max autorisés"
            },
            create: {
                success: "Groupe de template enregistré"
            },
            update: {
                success: "Groupe de template mis à jour"
            }
        },
        columns: {
            title: "Liste de groupe de templates",
            label: {
                title: "Nom"
            },
            description: {
                title: "Description"
            },
            created: {
                title: "Crée le"
            },
            actions: {
                title: "Actions"
            }
        },
        filter: {
            title: 'Filtrer les groupes de template'
        }
    },
    user: {
        title: "Utilisateurs",
        add: {
            btn: "Nouveau utilisateur",
            title: "Ajouter un utilisateur",
            title2: "Approvisionner"
        },
        edit: {
            title: "Modifier l'utilisateur"
        },
        filter: {
            title: 'Filtrer les utilisateurs'
        },
        form: {
            title: "Liste des utilisateurs",
            label: {
                title: "Nom"
            },
            username: {
                title: "Login",
                required: "Nom requis",
                maxLength: "Nom trop long. {0} caractères max autorisés",
                minLength: "Nom trop court. {0} caractères max autorisés",
            },
            name: {
                title: "Nom utilisateur",
                required: "Nom utilisateur requis",
                maxLength:
                    "Nom utilisateur trop longue. {0} caractères max autorisés",
                minLength: "Nom trop court. {0} caractères max autorisés"
            },
            password: {
                title: "Mot de passe",
                required: "Mot de passe requis",
                maxLength: "Mot de passe trop longue. {0} caractères max autorisés",
                minLength: "Nom trop court. {0} caractères max autorisés"
            },
            confirmpassword: {
                title: "Confirmé Mot de passe",
                required: "Confirmation requise",
                sameAs: "Confirmation de mot de passe incorrect"
            }
            ,
            create: {
                success: "Compte enregistré",
                success2: "Approvisionnement éffectué"
            },
            status: {
                title: "Statut",
                title2: "Cocher pour activer le compte"
            },
            smsBalance: {
                title: "Solde"
            },
            role: {
                title: "Rôle",
                required: "Role requise",
                admin: "Administrateur",
                super: "Super administrateur",
                user: "Utilisateur"
            },
            actions: {
                title: "Actions"
            },
            update: {
                success: "Compte mis à jour"
            },
            quantity: {
                title: "Quantité",
                required: "Quantité requise",
                numeric: "Quantité doit être un nombre entier"
            },
            transaction: {
                title: "Transaction",
                debit: "DEBIT",
                credit: "CREDIT"
            }
        }
    },
    dashboard: {
        title: "Dashboard",
        summary: {
            title: "Statistiques sommaire",
            sms_sent: {
                title: "Notifications envoyées"
            },
            sms_pending: {
                title: "Notifications programmées"
            },
            contacts: {
                title: 'Contacts',
                description: 'Nombre de contacts enregistrés'
            }
        },
        form: {
            title: 'Filtrer les resultats',
            startdate: {
                title: "Date début"
            },
            enddate: {
                title: "Date fin"
            },
            error: {
                before: "Date de fin doit être supérieure à date début",
                required: "Date fin et date début requises"
            }
        }
    },
    contact: {
        filter: {
            title: "Filtrer les contacts"
        },
        title: "Contacts",
        undeleted: "Impossible de supprimer. Contact déjà utilisé",
        add: {btn: "Nouveau contact", title: "Ajouter un nouveau contact"},
        list: "Contacts",
        form: {
            label: {
                title: "Nom"
            },
            scope: {
                private: "Privé",
                public: "Publique"
            },
            contactType: {
                placeholder: "Entrer du texte pour lancer la recherche"
            },
            create: {
                success: "Contact enregistré"
            },
            update: {
                success: "Contact mis à jour"
            }
        },
        columns: {
            title: "Liste de contacts",
            msisdn: {
                title: "Numero de telephone",
                required: "Numero de telephone requis",
                maxLength: "Numéro trop longue. {0} caractères max autorisés",
                minLength: "Numéro trop court. {0} caractères au minimum autorisés"
            },
            fullName: {
                title: "Nom",
                required: "Nom requis",
                maxLength: "Nom trop longue. {0} caractères max autorisés"
            },
            email: {
                title: "Email",
                required: "Adresse Email requise",
                maxLength: "Email trop longue. {0} caractères max autorisés",
                minLength: "Email trop court. {0} caractères au minimum autorisés",
                invalid: "Email invalide"
            },
            creationDate: {
                title: "Date de creation"
            },
            scope: {
                title: "Type",
                required: "Type requis"
            },
            label: {
                title: "Groupe de contact",
                required: "Nom du groupe requis",
                maxLength: "Nom du groupe trop longue. {0} caractères max autorisés"
            },
            actions: {
                title: "Actions"
            }
        }
    },
    group_contact: {
        filter: {
            title: "Filtrer les groupes de contacts"
        },
        title: "Groupe de contacts",
        undeleted: "Impossible de supprimer ce groupe",
        add: {
            btn: "Nouveau groupe",
            title: "Ajouter un nouveau groupe"
        },
        edit: {
            title: "Modifier le groupe"
        },
        form: {
            label: {
                title: "Nom",
                required: "Nom requis",
                maxLength: "Nom trop long. {0} caractères max autorisés"
            },
            description: {
                title: "Description",
                required: "Description requise",
                maxLength: "Description trop longue. {0} caractères max autorisés"
            },
            create: {
                success: "Groupe de contact enregistré"
            },
            update: {
                success: "Groupe de contact mis à jour"
            }
        },
        columns: {
            title: "Liste de groupe de contacts",
            name: {
                title: "Nom"
            },
            description: {
                title: "Description"
            },
            created: {
                title: "Crée le"
            },
            actions: {
                title: "Actions"
            }
        }
    },
    template: {
        filter: {
            title: "Filtrer les templates"
        },
        add: {
            btn: "Nouveau template",
            title: "Ajouter un nouveau template"
        },
        edit: {
            title: "Modifier le template"
        },
        form: {
            label: {
                title: "Object"
            },
            create: {
                success: "Template enregistré"
            },
            update: {
                success: "Template mis à jour"
            }
        },
        columns: {
            title: "Liste de templates",
            templategroupId: {
                placeholder: "Entrer du texte pour lancer la recherche",
                required: "Groupe de template requis",
                title: "Groupe template"
            },
            object: {
                title: "Objet",
                required: "Object requis",
                maxLength: "Object trop longue. {0} caractères max autorisés"
            },
            message: {
                title: "Message",
                required: "Message requis",
                maxLength: "Message trop longue. {0} caractères max autorisés"
            },
            actions: {
                title: "Actions"
            },
            owner: {
                required: "Auteur requis",
                title: "Auteur "
            },
            sendingWay: {
                title: "Type d'envoi",
                SMS: " SMS",
                MAIL: "Mail",
                required: "Type d'envoi requis"
            },
            to: {
                title: "Destinataire",
                required: "Groupe de contact notifié requis",
                maxLength: "Destinataire trop longue. {0} caractères max autorisés",
                placeholder: "Entrer du texte pour lancer la recherche"
            },
            cc: {
                title: "Destinataire CC",
                placeholder: "Entrer du texte pour lancer la recherche",
                required: "Groupe de contact notifié requis",
                maxLength: "Destinataire CC trop longue. {0} caractères max autorisés"
            },
            cci: {
                title: "Destinataire CCI",
                placeholder: "Entrer du texte pour lancer la recherche",
                required: "Groupe de contact notifié requis",

            },
            description: {
                title: "Description",
                required: "Description  requis",
                maxLength: "Description trop longue. {0} caractères max autorisés"
            },
            label: {
                title: "Label",
                required: "label  requis",
                maxLength: "label trop longue. {0} caractères max autorisés"
            }
        }
    },
    notification: {
        filter: {
            title: "Filter les notifications"
        },
        add: {
            btn: "Nouvelle notification",
            title: "Effectuer une nouveelle notification"
        },
        edit: {
            title: "Modifier le notification"
        },
        form: {
            label: {
                title: "Object"
            },
            create: {
                success: "Notification enregistré"
            },
            update: {
                success: "Notification mis à jour"
            }
        },
        columns: {
            title: "Liste de notifications",
            creationDate: {
                title: "Date création"
            },
            templateId: {
                required: "Template requis",
                title: "Template",
                placeholder: "Entrer du texte pour selectionner un template"
            },
            object: {
                title: "Objet",
                required: "Object requis",
                maxLength: "Object trop longue. {0} caractères max autorisés"
            },
            message: {
                title: "Message",
                required: "Message requis",
                maxLength: "Message trop longue. {0} caractères max autorisés"
            },
            actions: {
                title: "Actions"
            },
            owner: {
                required: "Auteur requis",
                title: "Auteur "
            },
            sendingWay: {
                title: "Type d'envoi",
                SMS: " SMS",
                MAIL: "Mail",
                required: "Type d'envoi requis"
            },
            scope: {
                title: "Status",
                planned: "Programmée",
                sent: "Envoyée",
                pending: "En attente",
                failed: "Echouée"
            },
            to: {
                title: "Destinataire",
                required: "Destinataire requis",
                maxLength: "Destinataire trop longue. {0} caractères max autorisés",
            },
            cc: {
                title: "Destinataire CC",
                required: "Destinataire CC requis",
                maxLength: "Destinataire CC trop longue. {0} caractères max autorisés"
            },
            cci: {
                title: "Destinataire CCI",
                required: "Destinataire CCI requis",
                maxLength: "Destinataire CCI trop longue. {0} caractères max autorisés"
            },
            description: {
                title: "Description",
                required: "Description requis",
                maxLength: "Description trop longue. {0} caractères max autorisés"
            },
            label: {
                title: "Label",
                required: "label requis",
                maxLength: "label trop longue. {0} caractères max autorisés",
            },
            sendingDate: {
                title: "Date",
                required: "Date d'envoie",
            }
        }
    },
    login: {
        title: "Connectez vous",
        form: {
            btn: "Connexion",
            username: "Nom d'utilisateur",
            password: "Mot de passe"
        },
        bad_credentials: "Username ou mot de passe incorrects"
    },
    notificationContact: {
        notFound: "Groupe de notification introuvable",
        filter: {
            title: "Filter les groupes de contacts notifiés"
        },
        see: {
            title: " Contacts",
            consult: "Voir contact",
        },
        edit: {
            title: "Modifier le groupe"
        },
        title: "Groupe de notification",
        add: {
            btn: "Nouveau groupe",
            title: "Ajouter un nouveau groupe de notification"
        },
        list: "Groupe de notification",
        form: {
            label: {
                title: "Nom"
            }
        },
        columns: {
            title: "Liste des groupes de contacts notifiés",
            fullName: {
                title: "Contact",
                required: "Contact requis",
                placeholder: "Entrer du texte pour lancer la recherche"
            },
            label: {
                title: "Nom du groupe",
                required: "Nom du groupe requis",
                maxLength: "Nom du groupe trop longue. {0} caractères max autorisés"
            },
            labels: {
                title: "Nom des contacts"
            },
            owner: {
                required: "Auteur requis",
                title: "Crée par"
            },
            actions: {
                title: "Actions"
            },
            description: {
                title: "Description",
                required: "Description requise",
                maxLength: "Description trop longue. {0} caractères max autorisés"
            },
            contact: {
                title: "Contacts"
            },
            create: {
                success: "Groupe de contact de notification enregistré"
            },
            update: {
                success: "Groupe de contact de notification mis à jour"
            },
            created: {
                title: "Crée le"
            },
            name: {
                title: "Nom utilisateur",
                required: "Nom utilisateur requis",
                maxLength: "Nom utilisateur trop longue. {0} caractères max autorisés",
                minLength: "Nom trop court. {0} caractères max autorisés"
            }
        },
        detail: {
            title: "Détail groupe notification"
        }
    },
    balance: {
        title: "Approvisionnements",
        filter: {
            title: 'Filtrer les approvisionnements'
        },
        form: {
            title: "Liste des approvisionnements"
        },
        columns: {
            name: {
                title: "Nom"
            },
            smsBalance: {
                title: "Solde"
            },
            author: {
                title: "Auteur"
            },
            creationDate: {
                title: "Crée le"
            },
            quantity: {
                title: "Quantité"
            },
        }
    },
    statistic: {
        title: "Statistique",
        dataNotFound: "Aucune donnée trouvée",
        greatThan: "La date de fin doit être plus grand que la date de début",
        required: "ce champ est requis",
        charts: {
            chart_1: {
                title: "Notification",
                subtitle: "Statistisque sur les notifications",
                axis: {
                    x: "Envoyé",
                    y: "Pannifié",
                    z: "Echoué",
                    t: "Date"
                }
            }
        },
        download: {
            png: "Télécharger image en png",
            jpeg: "Télécharger image en jpeg",
            excel: {
                default: "Télécharger fichier en xlsx",
                other: "Télécharger les détails en fichier xlsx"
            },
            pdf: "Télécharger document en pdf"
        }
    }
};
