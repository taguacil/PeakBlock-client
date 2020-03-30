import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    register,
    viewProfile,
    viewUserSettings,
    viewFeedBack,
    viewInvitations,
//    getAllInvitations,
  //  sendInvitation,
    viewReviewsAsSeller,
    viewReviewsAsBuyer,
    viewReviewsForOthers,
    showChangePasswordModal,
    changePassword,
    showUpdateMobileModal,
    updateMobile,
    showUpdateEmailModal,
    updateEmail,
    showUpdateAddressModal,
    updateAddress,
    getIsUserVerified,
};

function register(user,regType) {
    return async (dispatch) => {
        dispatch(request(user));
        try {
            await userService.register(user,regType);
            dispatch(success(user));
            history.push('/');
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(alertActions.error({ header: ex.message }));
        }
    };

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user };
    }

    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user };
    }

    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}

function viewUserSettings() {
    return async (dispatch) => {
        dispatch({
            type: userConstants.VIEW_PROFILE_USER_SETTINGS,
            display: 'USER_SETTINGS',
        });
    };
}

function viewFeedBack() {
    return async (dispatch) => {
        dispatch({
            type: userConstants.VIEW_PROFILE_FEEDBACK,
            display: 'FEEDBACK',
        });
    };
}

function viewInvitations() {
    return async (dispatch) => {
        dispatch({
            type: userConstants.USERS_VIEW_PROFILE_INVITATIONS,
            display: 'INVITATIONS',
        });
    };
}

function viewReviewsAsSeller(userId) {
    return async (dispatch) => {
        dispatch({
            type: userConstants.VIEW_PROFILE_REVIEWS_AS_SELLER_REQUEST,
            display: 'REVIEWS',
        });
        try {
            const { data } = await userService.getReviewsAsSeller(userId);
            dispatch(success(data));
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(
                alertActions.error({
                    header: "Can't get user reviews data",
                    content: ex.message,
                }),
            );
        }
    };

    function success(reviewsAsSeller) {
        return {
            type: userConstants.VIEW_PROFILE_REVIEWS_AS_SELLER_SUCCESS,
            reviewsAsSeller,
        };
    }

    function failure(error) {
        return {
            type: userConstants.VIEW_PROFILE_REVIEWS_AS_SELLER_FAILURE,
            error,
            display: 'USER_SETTINGS',
        };
    }
}

function viewReviewsAsBuyer(userId) {
    return async (dispatch) => {
        dispatch({
            type: userConstants.VIEW_PROFILE_REVIEWS_AS_BUYER_REQUEST,
            display: 'REVIEWS',
        });
        try {
            const { data } = await userService.getReviewsAsBuyer(userId);

            dispatch(success(data));
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(
                alertActions.error({
                    header: "Can't get user reviews data",
                    content: ex.message,
                }),
            );
        }
    };

    function success(reviewsAsBuyer) {
        return {
            type: userConstants.VIEW_PROFILE_REVIEWS_AS_BUYER_SUCCESS,
            reviewsAsBuyer,
        };
    }

    function failure(error) {
        return {
            type: userConstants.VIEW_PROFILE_REVIEWS_AS_BUYER_FAILURE,
            error,
            display: 'USER_SETTINGS',
        };
    }
}

function viewReviewsForOthers(userId) {
    return async (dispatch) => {
        dispatch({
            type: userConstants.VIEW_PROFILE_REVIEWS_FOR_OTHERS_REQUEST,
            display: 'REVIEWS',
        });
        try {
            const { data } = await userService.getReviewsForOthers(userId);
            dispatch(success(data));
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(
                alertActions.error({
                    header: "Can't get user reviews data",
                    content: ex.message,
                }),
            );
        }
    };

    function success(reviewsForOthers) {
        return {
            type: userConstants.VIEW_PROFILE_REVIEWS_FOR_OTHERS_SUCCESS,
            reviewsForOthers,
        };
    }

    function failure(error) {
        return {
            type: userConstants.VIEW_PROFILE_REVIEWS_FOR_OTHERS_FAILURE,
            error,
            display: 'USER_SETTINGS',
        };
    }
}

function viewProfile(user) {
    return async (dispatch) => {
        dispatch(request(user));
        try {
            let { data } = await userService.viewProfile();
            dispatch(success(data));
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(alertActions.error({ header: ex.message }));
        }
    };

    function request(user) {
        return { type: userConstants.VIEW_PROFILE_REQUEST, user };
    }

    function success(userProfile) {
        return {
            type: userConstants.VIEW_PROFILE_SUCCESS,
            userProfile,
        };
    }

    function failure(error) {
        return { type: userConstants.VIEW_PROFILE_FAILURE, error };
    }
}

/*

function getAllInvitations(userId) {
    return async (dispatch) => {
        dispatch(request());
        try {
            let { data } = await invitationService.viewAllMyInvitations(userId);
            dispatch(success(data));
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(alertActions.error({ header: ex.message }));
        }
    };

    function request() {
        return { type: userConstants.VIEW_INVITATIONS_REQUEST };
    }

    function success(data) {
        return {
            type: userConstants.VIEW_INVITATIONS_SUCCESS,
            invitations: data.invitations,
        };
    }

    function failure(error) {
        return { type: userConstants.VIEW_INVITATIONS_FAILURE, error };
    }
}
*/
/*
function sendInvitation(email) {
    return async (dispatch) => {
        dispatch(request());
        try {
            let { data } = await invitationService.sendInvitation({ invitees: [email] });
            dispatch(success(data));
            dispatch(
                alertActions.success({
                    header: 'Invitation',
                    content: data.message,
                }),
            );

        } catch (ex) {
            dispatch(failure(ex));
            dispatch(alertActions.error({ header: ex.message }));
        }
    };

    function request() {
        return { type: userConstants.SEND_INVITATIONS_REQUEST };
    }

    function success(data) {
        return {
            type: userConstants.SEND_INVITATIONS_SUCCESS,
        };
    }

    function failure(error) {
        return { type: userConstants.SEND_INVITATIONS_FAILURE, error };
    }
}*/

function showChangePasswordModal(visible) {
    return async (dispatch) => {
        dispatch({
            type: userConstants.CHANGE_PASSWORD_SHOW_MODAL,
            openChangePassword: visible,
        });
    };
}

function changePassword(passwordData) {
    return async (dispatch) => {
        dispatch(request(passwordData));
        try {
            await userService.changePassword(
                passwordData.oldPassword,
                passwordData.newPassword,
            );
            dispatch(success());
            dispatch(
                alertActions.success({
                    header: 'Password change',
                    content: 'Password changed successfully',
                }),
            );
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(
                alertActions.error({
                    header: 'Password change',
                    content: ex.message,
                }),
            );
        }
    };

    function request() {
        return { type: userConstants.CHANGE_PASSWORD_REQUEST };
    }

    function success() {
        return {
            type: userConstants.CHANGE_PASSWORD_SUCCESS,
            openChangePassword: false,
        };
    }

    function failure(error) {
        return {
            type: userConstants.CHANGE_PASSWORD_FAILURE,
            error,
        };
    }
}

function showUpdateMobileModal(visible) {
    return async (dispatch) => {
        dispatch({
            type: userConstants.UPDATE_MOBILE_SHOW_MODAL,
            openUpdateMobile: visible,
        });
    };
}

function updateMobile(code, mobile) {
    return async (dispatch) => {
        dispatch(request(mobile));
        try {
            const { data } = await userService.updateMobile(code, mobile);
            dispatch(success(data));
            dispatch(
                alertActions.success({
                    header: 'Mobile update',
                    content: 'Mobile updated successfully',
                }),
            );
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(
                alertActions.error({
                    header: 'Mobile update',
                    content: ex.message,
                }),
            );
        }
    };

    function request() {
        return { type: userConstants.UPDATE_MOBILE_REQUEST };
    }

    function success(userProfile) {
        return {
            type: userConstants.UPDATE_MOBILE_SUCCESS,
            openUpdateMobile: false,
            userProfile,
        };
    }

    function failure(error) {
        return {
            type: userConstants.UPDATE_MOBILE_FAILURE,
            error,
        };
    }
}

function showUpdateEmailModal(visible) {
    return async (dispatch) => {
        dispatch({
            type: userConstants.UPDATE_EMAIL_SHOW_MODAL,
            openUpdateEmail: visible,
        });
    };
}

function updateEmail(emailAddress) {
    return async (dispatch) => {
        dispatch(request());
        try {
            const { data } = await userService.updateEmail(emailAddress);
            dispatch(success(data));
            dispatch(
                alertActions.success({
                    header: 'Email update',
                    content:
                        'Mail updated successfully. Please check your email',
                }),
            );
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(
                alertActions.error({
                    header: 'Email update',
                    content: ex.message,
                }),
            );
        }
    };

    function request() {
        return { type: userConstants.UPDATE_EMAIL_REQUEST };
    }

    function success(userProfile) {
        return {
            type: userConstants.UPDATE_EMAIL_SUCCESS,
            openUpdateEmail: false,
            userProfile,
        };
    }

    function failure(error) {
        return { type: userConstants.UPDATE_EMAIL_FAILURE, error };
    }
}

function showUpdateAddressModal(visible) {
    return async (dispatch) => {
        dispatch({
            type: userConstants.UPDATE_ADDRESS_SHOW_MODAL,
            openUpdateAddress: visible,
        });
    };
}

function updateAddress(address) {
    return async (dispatch) => {
        dispatch(request());
        try {
            const { data } = await userService.updateAddress(address);
            dispatch(success(data));
            dispatch(
                alertActions.success({
                    header: 'Address update',
                    content: 'Address updated successfully',
                }),
            );
        } catch (ex) {
            let error = '';
            for (let i = 0; i < ex.length; i++) {
                error +=
                    ex[i].dataPath.substring(1) + ' ' + ex[i].message + '\n';
            }
            dispatch(failure(ex));
            dispatch(
                alertActions.error({
                    header: 'Address update',
                    content: error,
                }),
            );
        }
    };

    function request() {
        return { type: userConstants.UPDATE_ADDRESS_REQUEST };
    }

    function success(userProfile) {
        return {
            type: userConstants.UPDATE_ADDRESS_SUCCESS,
            openUpdateAddress: false,
            userProfile,
        };
    }

    function failure(error) {
        return { type: userConstants.UPDATE_ADDRESS_FAILURE, error };
    }
}

function getIsUserVerified(userId) {
    return async (dispatch) => {
        try {
            const { data } = await userService.getIsUserVerifiedBylId(userId);
            dispatch(success(data));
        } catch (ex) {
            dispatch(failure(ex));
            dispatch(
                alertActions.error({
                    header: "Can't get your info",
                    content: ex.message,
                }),
            );
        }
    };

    function success(data) {
        return {
            type: userConstants.GET_IS_USER_VERIFIED_SUCCESS,
            isVerified: data.isVerified,
        };
    }

    function failure(error) {
        return { type: userConstants.GET_IS_USER_VERIFIED_FAILURE, error };
    }
}
