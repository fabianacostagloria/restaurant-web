export interface Restaurant {
  _id: string;
  name?: string;
  company?: string;
  storeInternalId?: string;
  type?: string;
  countryCode?: string;
  addressInfo?: {
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    state?: string;
  };
  location?: {
    type?: string;
    coordinates?: [number, number];
  };
  contacts?: {
    phoneNumber?: string;
    email?: string;
    cellphoneNumber?: string;
  };
  image?: {
    file: string;
    url: string;
  };
  languageInfo?: string;
  timezone?: string;
  currencyInfo?: {
    symbol: string;
    name: string;
    symbol_native: string;
    decimal_digits: number;
    rounding: number;
    code: string;
    name_plural: string;
  };
  cuisines?: any[];
  additionalInfo?: any[];
  services?: {
    couponCodeOffers?: {
      enabled?: boolean;
      trigger?: any[];
      orderTriggerValue?: number;
    };
    loyalty?: {
      enabled?: boolean;
    };
    events?: {
      enabled?: boolean;
      showOnAppHome?: boolean;
    };
    countingPeople?: {
      enabled?: boolean;
    };
    surveys?: {
      externalProvider?: {
        allowConfig?: boolean;
        enabled?: boolean;
      };
      enabled?: boolean;
    };
    delivery?: {
      zones?: string[];
      schedules?: string[];
      enabled?: boolean;
      autoAcceptOrder?: boolean;
      provider?: string;
      showOnAppHome?: boolean;
    };
    takeaway?: {
      schedules?: string[];
      enabled?: boolean;
    };
    inRestaurantMenus?: {
      enabled?: boolean;
    };
    tableReservations?: {
      enabled?: boolean;
    };
    customersQueue?: {
      enabled?: boolean;
    };
    scango?: {
      siteOptions?: any[];
      autoAcceptOrder?: boolean;
      enabled?: boolean;
    };
    foodReservations?: {
      externalProvider?: {
        allowConfig?: boolean;
        enabled?: boolean;
      };
      siteOptions?: any[];
      enabled?: boolean;
      autoAcceptOrder?: boolean;
    };
    coffeeBreak?: {
      externalProvider?: {
        allowConfig?: boolean;
        enabled?: boolean;
      };
      requiredFormFields?: {
        scheduledUtensilsCollect?: boolean;
        peopleCount?: boolean;
        obs?: boolean;
      };
      siteOptions?: any[];
      enabled?: boolean;
      enableApprovalWorkflow?: boolean;
      enableBudget?: boolean;
      autoAcceptOrder?: boolean;
      paymentOptions?: any[];
    };
    inOfficeDelivery?: {
      getNow?: {
        siteOptions?: any[];
        autoAcceptOrder?: boolean;
        skipToDelivered?: boolean;
        enabled?: boolean;
      };
      delivery?: {
        siteOptions?: any[];
        autoAcceptOrder?: boolean;
        enabled?: boolean;
      };
      takeaway?: {
        siteOptions?: any[];
        autoAcceptOrder?: boolean;
        enabled?: boolean;
      };
      enabled?: boolean;
    };
    ingress?: {
      enabled?: boolean;
    };
    ordersConfirmation?: {
      onOrderRead?: {
        confirmDeliveryOnDaySchedulle?: boolean;
        confirmDeliveryOffDaySchedulle?: boolean;
        confirmDeliveryOnlyOnDaySchedulle?: boolean;
        printOrder?: boolean;
        cancelExpiredOrder?: boolean;
      };
      enabled?: boolean;
    };
    budget?: {
      enabled?: boolean;
    };
    marketplace?: {
      enabled?: boolean;
    };
    anamnesis?: {
      enabled?: boolean;
    };
    customServices?: any[];
    integrations?: any[];
  };
  updatedAt?: string;
  hideContact?: boolean;
  isTest?: boolean;
  languageCode?: string;
  currencyCode?: string;
  paymentServices?: {
    walletPaymentOptions?: {
      allowAdminCancelWalletCorp?: boolean;
      allowAdminCancelWalletSchools?: boolean;
      enableNegativePurchaseBlock?: boolean;
      walletCorpUserIdentifier?: string;
    };
    userFiscalNumber?: string;
    defaultTextCase?: string;
  };
  enabled?: boolean;
}

export interface Response {
  docs: Restaurant[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
