import { userConstants } from '../constants';

const initialState = {
    userProfile: {
        phone: {},
        email: {},
    },
};

export function users(state = initialState, action) {
    switch (action.type) {
        //Profile
        case userConstants.VIEW_PROFILE_REQUEST:
            return {
                ...state,
            };
        case userConstants.VIEW_PROFILE_SUCCESS:
            return {
                ...state,
                userProfile: action.userProfile,
            };
        case userConstants.VIEW_PROFILE_FAILURE:
            return {
                ...state,
            };
        case userConstants.VIEW_INVITATIONS_REQUEST:
            return {
                ...state,
            };
        case userConstants.VIEW_INVITATIONS_SUCCESS:
            return {
                ...state,
                invitations: action.invitations,
            };
        case userConstants.VIEW_INVITATIONS_FAILURE:
            return {
                ...state,
            };
        case userConstants.VIEW_PROFILE_USER_SETTINGS:
            return {
                ...state,
                display: action.display,
            };
        case userConstants.VIEW_PROFILE_FEEDBACK:
            return {
                ...state,
                display: action.display,
            };
        case userConstants.USERS_VIEW_PROFILE_INVITATIONS:
            return {
                ...state,
                display: action.display,
            };

        case userConstants.VIEW_PROFILE_REVIEWS_AS_SELLER_REQUEST:
            return {
                ...state,
                display: action.display,
            };

        case userConstants.VIEW_PROFILE_REVIEWS_AS_SELLER_SUCCESS:
            return {
                ...state,
                reviewsAsSeller: action.reviewsAsSeller,
            };

        case userConstants.VIEW_PROFILE_REVIEWS_AS_SELLER_FAILURE:
            return {
                ...state,
                display: action.display,
            };
        case userConstants.VIEW_PROFILE_REVIEWS_AS_BUYER_REQUEST:
            return {
                ...state,
                display: action.display,
            };

        case userConstants.VIEW_PROFILE_REVIEWS_AS_BUYER_SUCCESS:
            return {
                ...state,
                reviewsAsBuyer: action.reviewsAsBuyer,
            };

        case userConstants.VIEW_PROFILE_REVIEWS_AS_BUYER_FAILURE:
            return {
                ...state,
                display: action.display,
            };
        case userConstants.VIEW_PROFILE_REVIEWS_FOR_OTHERS_REQUEST:
            return {
                ...state,
                display: action.display,
            };

        case userConstants.VIEW_PROFILE_REVIEWS_FOR_OTHERS_SUCCESS:
            return {
                ...state,
                reviewsForOthers: action.reviewsForOthers,
            };

        case userConstants.VIEW_PROFILE_REVIEWS_FOR_OTHERS_FAILURE:
            return {
                ...state,
                display: action.display,
            };
        //Change password
        case userConstants.CHANGE_PASSWORD_SHOW_MODAL:
            return {
                ...state,
                openChangePassword: action.openChangePassword,
            };
        case userConstants.CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
            };
        case userConstants.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                openChangePassword: action.openChangePassword,
            };
        case userConstants.CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
            };
        //EMail
        case userConstants.UPDATE_EMAIL_SHOW_MODAL:
            return {
                ...state,
                openUpdateEmail: action.openUpdateEmail,
            };
        case userConstants.UPDATE_EMAIL_REQUEST:
            return {
                ...state,
            };
        case userConstants.UPDATE_EMAIL_SUCCESS:
            return {
                ...state,
                openUpdateEmail: action.openUpdateEmail,
                userProfile: action.userProfile,
            };
        case userConstants.UPDATE_EMAIL_FAILURE:
            return {
                ...state,
            };
        //update phone number
        case userConstants.UPDATE_MOBILE_SHOW_MODAL:
            return {
                ...state,
                openUpdateMobile: action.openUpdateMobile,
            };
        case userConstants.UPDATE_MOBILE_REQUEST:
            return {
                ...state,
            };
        case userConstants.UPDATE_MOBILE_SUCCESS:
            return {
                ...state,
                openUpdateMobile: action.openUpdateMobile,
                userProfile: action.userProfile,
            };
        case userConstants.UPDATE_MOBILE_FAILURE:
            return {
                ...state,
            };
        //update address
        case userConstants.UPDATE_ADDRESS_SHOW_MODAL:
            return {
                ...state,
                openUpdateAddress: action.openUpdateAddress,
            };
        case userConstants.UPDATE_ADDRESS_REQUEST:
            return {
                ...state,
            };
        case userConstants.UPDATE_ADDRESS_SUCCESS:
            return {
                ...state,
                openUpdateAddress: action.openUpdateAddress,
                userProfile: action.userProfile,
            };
        case userConstants.UPDATE_ADDRESS_FAILURE:
            return {
                ...state,
            };
        case userConstants.GET_IS_USER_VERIFIED_SUCCESS:
            return {
                ...state,
                isVerified: action.isVerified
            }
        case userConstants.GET_IS_USER_VERIFIED_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    }
}
