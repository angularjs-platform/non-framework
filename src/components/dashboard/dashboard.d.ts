export declare namespace Dashboard {

    interface DashboardComponentConfig {
        // The name of the Component.
        name: string;

        // The label of the Component.
        label: string;

        // Component Template to Drag n Drop
        template: string;

        // Component Properties editor Template
        propertiesEditorTemplate: {}[];
    }

    interface IDashboardProvider extends ng.IServiceProvider {
        registerComponent(component: DashboardComponentConfig): void;
    }

    interface IDashboardService {

    }
}

