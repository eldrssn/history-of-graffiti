import { DataLayerOptions } from '@models'

interface RegistrationApi {
  init(id: string): void
  onRegistrationCompleted(): void
}

declare global {
  interface Window {
    dataLayer: DataLayerOptions[]
    AF_SMART_SCRIPT_RESULT: {
      clickURL: string | undefined
    }
    registrationApi: RegistrationApi
    registrationConfig: {
      configPath: '/' | './'
    }
    urlsConfig: {
      cdnUrl: string
      registrationWidgetLoader: string
    }
  }
}
