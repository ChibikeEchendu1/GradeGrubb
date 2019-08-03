//const IP = '192.168.2.48'
const IP = 'https://www.gradegrubb.com'
//const IP = '10.192.79.207' 172.20.10.9
//const IP = 'http://172.20.10.11/gg/gg' 
//const IP = 'http://127.0.0.1/gg/gg'



import ImagePicker from 'react-native-image-crop-picker'
import RNFetchBlob from 'rn-fetch-blob'
import { AsyncStorage } from "react-native"

export const emailChanged = (text) => {
    return{
        type: 'email_changed',
        payload: text
    };
};



export const messageChnage = (text) => {
        return{
            type: 'message_changed',
            payload: text
        };
    };

export const passwordChanged = (text) => {
    return{
        type: 'password_changed',
        payload: text
    };
};

export const fetchinfo = () => {
    return{
        type: 'infofetched',
        payload: "done"
    };
};


export const SaveInfo = (item) => {
    return{
        type: 'infosaved',
        payload: item
    };
};



export const markChanged = (graaa,score) => {
    return{
        type: 'mark_changed',
        payload: {"grade":graaa, "score":score}
    };
};

export const markChanged2 = (graaa) => {
    return{
        type: 'mark_changed2',
        payload: graaa
    };
};

export const passwordChanged2 = (text) => {
    return{
        type: 'password_changed2',
        payload: text
    };
};

export const passwordChanged3 = (text) => {
    return{
        type: 'password_changed3',
        payload: text
    };
};


export const NameChanged = (text) => {
    return{
        type: 'Name_changed',
        payload: text
    };
};

export const NameChanged2 = (text) => {
    return{
        type: 'Name_changed2',
        payload: text
    };
};



export const NameChangedSub = (text) => {
    return{
        type: 'Name_changedsub',
        payload: text
    };
};

export const NameChangedSub2 = (text) => {
    return{
        type: 'Name_changedsub2',
        payload: text
    };
};

export const NameChangedSub22 = (text) => {
    return{
        type: 'Name_changedsub22',
        payload: text
    };
};

export const numchanged = (text) => {
    return{
        type: 'num_changed',
        payload: text
    };
};


export const numchanged2 = (text) => {
        return{
            type: 'num_changed2',
            payload: text
        };
    };


////////    IP ADDRESS
export const loginUser = ({email, password}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(email == '' || password == '' || typeof email == 'undefined' || typeof password == 'undefined' ){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
    else{
    fetch(IP+'/Ap/login.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
        password: password,
    }),
    }).then((response) => response.json()).then(users => {
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
};


export const delacoun = ({Id}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});

    
    fetch(IP+'/Ap/delacoo.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
Id: Id
      }),
    }).then((response) => response.json()).then(users => {
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   
  };
};

export const delacoun2 = ({Id,token}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user'});
fetch(IP+'/Ap/delacoo2.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    Id: Id,
    token:token
      }),
    }).then((response) => response.json()).then(users => {
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   
  };
};

export const ChangePass = ({Id,Oldpass,password,password2}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(password=='' || password2=='' || Oldpass=='' || typeof password == 'undefined' || typeof password2 == 'undefined'||  typeof Oldpass == 'undefined'){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }

else if(password != password2){
        dispatch({type: 'LoginUserFail', payload: "Passwords not the same"});
    }
    
    else{
        
    fetch(IP+'/Ap/Cp.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
Id,Id,
ID2:Oldpass,
signemail12: password,
signemail1: password2,
    }),
    }).then((response) => response.json()).then(users => {
if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserFaill'});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
        
    });
   }
  };
};




export const ChangePassForgot = ({Id,password,password2}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(password=='' || password2=='' || typeof password2 == 'undefined' || typeof password == 'undefined'){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }

else if(password != password2){
        dispatch({type: 'LoginUserFail', payload: "Passwords not the same"});
    }
    
    else{
        
    fetch(IP+'/Ap/Cpf.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
Id,Id,
signpass: password,
signpass2: password2,
    }),
    }).then((response) => response.json()).then(users => {
if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserFaill'});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
        
    });
   }
  };
};

export const signupUser = ({Name, email,password,password2}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(email == '' || password=='' || password2=='' || Name =='' || typeof email == 'undefined' || typeof password == 'undefined' || typeof Name == 'undefined' || typeof password2 == 'undefined' ){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
    
    else{
        
    fetch(IP+'/Ap/Signup.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Name: Name,
        email: email,
        password: password,
        password2: password2,
    }),
    }).then((response) => response.json()).then(users => {
        
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
};




export const fetchTeach = ({valll,nname}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
   
        
    fetch(IP+'/Ap/ghomeFetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
name: nname
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'TFetchDone', payload: users});
    });
   }
};

export const setdevice = ({fcmtoken,apnstoken,Id}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_usertoken'});
   
        
    fetch(IP+'/Ap/setdevice.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
apnstoken: apnstoken,
fcmtoken: fcmtoken,
value:Id
    }),
    }).then((response) => response.json()).then(users => {
             AsyncStorage.setItem('tocken', JSON.stringify(fcmtoken));
       dispatch({type: 'justdone', payload: users});
    });
   }
};



export const SubFetch = ({valll,nname}) => {
    
    return (dispatch) => {
    
 dispatch({type: 'Login_user2'});
        
    fetch(IP+'/Ap/Subfetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
name: nname
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'SFetchDone', payload: users});
    });
   }
  };



export const SubTinfo = ({valll,nname}) => {
    
    return (dispatch) => {
    
 dispatch({type: 'Login_user2'});
        
    fetch(IP+'/Ap/infol.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
name: nname
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'SFetchInfoS', payload: users});
    });
   }
};



export const SubTinfos = ({valll,nname}) => {
    
    return (dispatch) => {
    
 dispatch({type: 'Login_user2'});
        
    fetch(IP+'/Ap/infols.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
name: nname
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'SFetchInfo', payload: users});
    });
   }
};

export const SubFetchS = ({valll,nname}) => {
    
    return (dispatch) => {
    
 dispatch({type: 'Login_user2'});
        
    fetch(IP+'/Ap/SubfetchS.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
name: nname
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'SFetchDoneS', payload: users});
    });
   }
};

export const AnnoucFetch = ({valll,nname}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/AnnocfetchS.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
name: nname
    }),
    }).then((response) => response.json()).then(users => {
       dispatch({type: 'AnnoFetchDone', payload: users});
    });
   }
};

export const EventFetch = ({valll,nname}) => {
        return (dispatch) => {
        dispatch({type: 'Login_user2'});
        fetch(IP+'/Ap/EventfetchS.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Id: valll,
    name: nname
        }),
        }).then((response) => response.json()).then(users => {
           dispatch({type: 'EventFetchDone', payload: users});
        });
       }
    };



export const eleFetch = ({name,Sname}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/elefetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: name,
Sname: Sname
    }),
    }).then((response) => response.json()).then(users => {
       dispatch({type: 'EFetchDone', payload: users});
    });
   }
  };

export const stuFetch = ({name,Sname,room}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/stufetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: name,
Sname: Sname,
room: room                           
    }),
    }).then((response) => response.json()).then(users => {
       dispatch({type: 'StFetchDone', payload: users});
    });
   }
  };


export const greFetch = ({name,Sname,worth,ele}) => {
    return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/grafetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: name,
Sname: Sname,
ele: ele,
worth: worth                      
    }),
    }).then((response) => response.json()).then(users => {
dispatch({type: 'GrFetchDone', payload: users});
    });
   }
};


export const fechstuclass = ({School,classRoom}) => {
    return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/fetchstuclass.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: School,
Sname: classRoom,                      
    }),
    }).then((response) => response.json()).then(users => {
    dispatch({type: 'stuclassFetchDone', payload: users});
    });
   }
};


export const fechstuclass2 = ({School,classRoom,Subname}) => {
        return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/fetchstuclass2.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: School,
Sname: Subname,   
room:classRoom,                   
    }),
    }).then((response) => response.json()).then(users => {
   dispatch({type: 'stuclassFetchDone2', payload: users});
    });
   }
};




export const fetchlass = ({Tid,school}) => {
                return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/TA.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
    name: school,
    Tid:Tid,
    //classRoom: classRoom,                  
        }),
        }).then((response) => response.json()).then(users => {
       dispatch({type: 'attendFetchDone22', payload: users});
        });
       }
    };


export const remstuclass2 = ({School,classRoom,Subname}) => {
            return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/remstuclass.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: School,
Sname: Subname,   
room:classRoom,                   
    }),
    }).then((response) => response.json()).then(users => {
   dispatch({type: 'stuclassFetchDone22', payload: users});
    });
   }
};

export const remstuclass = ({School,Subname}) => {
            return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/remeleclass.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: School,
Sname: Subname,   
}),
    }).then((response) => response.json()).then(users => {
    dispatch({type: 'remclassFetchDone2', payload: users});
    });
   }
};





export const markFetch2 = ({name,Sname,sid}) => {
    return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/markfetch2.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: name,
Sname: Sname,
sid: sid,                    
    }),
    }).then((response) => response.json()).then(users => {
    dispatch({type: 'markFetchDonexx', payload: users});
    });
   }
  };
export const markFetch = ({name,Sname,sid}) => {
    
    return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/markfetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: name,
Sname: Sname,
sid: sid,                    
    }),
    }).then((response) => response.json()).then(users => {
   dispatch({type: 'markFetchDone', payload: users});
    });
   }
  };


export const markFetchNotice = ({name,Sname,sid}) => {
    
        return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/markfetchnotice.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
    name: name,
    Sname: Sname,
    sid: sid,                    
        }),
        }).then((response) => response.json()).then(users => {
       dispatch({type: 'markfetchnotice', payload: users});
        });
       }
      };



export const grademarks = ({name,Sname,ele,Ids,scores,room,worth,RealSubNAme}) => {
    return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/grademarks.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: name,
Sname: Sname,
ele: ele,
Ids: Ids,
scores: scores,
room:room,
worth:worth,
RealSubNAme:RealSubNAme
}),
    }).then((response) => response.json()).then(users => {
   dispatch({type: 'StopLoader'});
    });
   }
  };


export const sendmessage = ({message,School,Tname,sid}) => {
        return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(message == '' || typeof message == 'undefined' ){
                dispatch({type: 'LoginUserFail', payload: "Empty Field"});
            }
        else{
    fetch(IP+'/Ap/message.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        message: message,
        School: School,
        Tname:Tname,
        sid:sid
    
    }),
        }).then((response) => response.json()).then(users => {
       dispatch({type: 'messagedone'});
        });
}
       }
      };






export const Creareclass = ({Students,Subname,School,Tid,name,classRoom,classRoom2}) => {
return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/step3app.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: School,
Sname: Subname,
Tname: name,
Tid: Tid,
Students: Students,
room:classRoom,
room2:classRoom2

    }),
    }).then((response) => response.json()).then(users => {
   if( typeof users.Id != 'undefined'){
dispatch({type: 'StopLoader',payload: users});
    }
else{
dispatch({type: 'LoginUserFail', payload: users}); 

}
    });
   }
};


export const removELEE = ({Students,Subname,School,classRoom}) => {

return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/removELEE.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: School,
Sname: Subname,
Students: Students,
room:classRoom

    }),
    }).then((response) => response.json()).then(users => {
   if( typeof users.Id != 'undefined'){
dispatch({type: 'StopLoader',payload: users});
    }
else{
dispatch({type: 'LoginUserFail', payload: users}); 

}
    });
   }
};

export const removstud = ({Students,Subname,School,Tid}) => {

return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/removstud.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: School,
Sname: Subname,
Students: Students,
Tid:Tid

    }),
    }).then((response) => response.json()).then(users => {
   if( typeof users.Id != 'undefined'){
dispatch({type: 'StopLoader',payload: users});
    }
else{
dispatch({type: 'LoginUserFail', payload: users}); 

}
    });
   }
};

export const subattend = ({Students,School,Tid,room}) => {

    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/SA.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
    name: School,
    Students: Students,
    Tid:Tid,
    room:room
    
        }),
        }).then((response) => response.json()).then(users => {
       if( typeof users.Id != 'undefined'){
    dispatch({type: 'StopLoader',payload: users});
        }
    else{
    dispatch({type: 'LoginUserFail', payload: users}); 
    
    }
        });
       }
    };


export const adstu = ({Students,Subname,School,Tid}) => {

return (dispatch) => {
dispatch({type: 'Login_user2'});
fetch(IP+'/Ap/adstu.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: School,
Sname: Subname,
Students: Students,
Tid:Tid

    }),
    }).then((response) => response.json()).then(users => {
   if( typeof users.Id != 'undefined'){
dispatch({type: 'StopLoader',payload: users});
    }
else{
dispatch({type: 'LoginUserFail', payload: users}); 

}
    });
   }
};




export const ForgotPass = ({email}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});
if(email == '' || typeof email == 'undefined' ){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
    else{
    fetch(IP+'/Ap/forgotpass.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
email: email,
    }),
    }).then((response) => response.json()).then(users => {
        
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
};


export const codePass = ({Name}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});
//console.log(Name);

    if(Name == '' || (typeof Name == 'undefined')){
        dispatch({type: 'LoginUserFail', payload: "Empty field"});
    }
    else{
    fetch(IP+'/Ap/codepass.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
Name: Name,
    }),
    }).then((response) => response.json()).then(users => {
        
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
};


export const resendcodePass2 = ({vall}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});
//console.log(vall);

    if(vall == '' || (typeof vall == 'undefined')   ){
        dispatch({type: 'LoginUserFail', payload: "Empty field"});
    }
    
    else{
        
    fetch(IP+'/Ap/resendcodePass2.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
vall: vall,
    }),
    }).then((response) => response.json()).then(users => {
        
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
};

export const codePass2 = ({Name}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});


    if(Name == '' || (typeof Name == 'undefined')   ){
        dispatch({type: 'LoginUserFail', payload: "Empty field"});
    }
    
    else{
        //    console.log(Name);
    fetch(IP+'/Ap/codepass2.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    Name: Name,
    }),
    }).then((response) => response.json()).then(users => {
        
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
};



export const cn = ({Name,nname,Id}) => {
return (dispatch) => {
    dispatch({type: 'Login_user'});
if(Name == '' || (typeof Name == 'undefined')){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
else{
fetch(IP+'/Ap/cn.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
Subname:Name,
name: nname,
Id: Id,
    }),
    }).then((response) => response.json()).then(users => {
// dispatch({type: 'LoginUserFail', payload: users});
if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserFaill'});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
        
    });
   }
  };
};

export const fetchPro = ({vall}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/fetchele.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: vall
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'FetchDone', payload: users});
    });
   }
};



export const fetchNotice = ({valll}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/fetchNotice.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'FetchDone', payload: users});
    });
   }
};

export const RemoveNotif = ({valll}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/RemoveNotif.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll
    }),
    }).then((response) => response.json()).then(users => {
        dispatch({type: 'FetchDoneuuuu', payload: users});
    });
   }
};

export const chanegepic = ({Id}) => {
    
    return (dispatch) => {
    //dispatch({type: 'Login_user2'});


let mime = 'image/jpg'

ImagePicker.openPicker({
width: 150,
height: 150,
includeBase64: true,
cropping: true,
mediaType: 'photo'
}).then(image => {
console.log(image.data);
const imagePath = image.path

RNFetchBlob.config({
// add this option that makes response data to be stored as a file,
// this is much more performant.
fileCache : true,
}).fetch('POST', IP+'/Ap/saveim.php', {
Authorization : "Bearer access-token",
otherHeader : "foo",
'Content-Type' : 'multipart/form-data',
}, [

{ name : 'image',  filename : 'image.png', type:'image/jpg', data:RNFetchBlob.wrap(imagePath)},
{ name : 'Id', data : Id+"" }
]).then((resp) => {
console.log(resp.text());
resp.flush()
dispatch({type: 'pic_changed', payload: "done"}); 

}).catch((err) => {
dispatch({type: 'pic_changed', payload: "done"});
console.log(err)
});
})
};
};


export const cn2 = ({Name}) => {
    
return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(Name == '' || (typeof Name == 'undefined')){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
else{
    dispatch({type: 'LoginUserFaill'});
}
  };
};


export const fetchclass = ({nname}) => {
            
return (dispatch) => {
dispatch({type: 'Login_user2'});
    fetch(IP+'/Ap/step2.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
name: nname
    }),
    }).then((response) => response.json()).then(users => {
       dispatch({type: 'FetchclaaDone', payload: users});
    });
   }
};



export const Addprofilecode = ({Id,password}) => {
return (dispatch) => {
          dispatch({type: 'Login_user'});
if((typeof password== 'undefined') || password== ''){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
    else{
     fetch(IP+'/Ap/fetchclass.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({

Id: Id,
code1: password,

    }),
    }).then((response) => response.json()).then(users => {
    if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
    
};

export const codeChanged = (text) => {
    return{
        type: 'code_changed',
        payload: text
    };
};

export const codeChanged2 = (text) => {
    return{
        type: 'code_changed2',
        payload: text
    };
};

export const delpro = ({Id,Pid}) =>{
return (dispatch) => {
     dispatch({type: 'Login_user2'});
    
    fetch(IP+'/Ap/delpro.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
activeRowPKey: Pid,
activeRowKey:Id

    }),
    }).then((response) => response.json()).then(users => {
   /* fetch('https://www.gradegrubb.com/Ap/fetchele.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: users
    }),
    }).then((response) => response.json()).then(users => {*/
       dispatch({type: 'FetchDone', payload: users});
    });
}
};



export const cn22 = ({nname,sub,Name,num,num2}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(Name == '' || (typeof Name == 'undefined' ) || typeof num == 'undefined'){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
    
    else{
        
    fetch(IP+'/Ap/cn22.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
subname:sub,
name: nname,
Addsubjectt:Name,
worth: num,
outof:num2
    }),
    }).then((response) => response.json()).then(users => {
if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserFaill'});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
        
    });
   }
  };
};

export const savePro = (id, val) => {
      let profile = {id, val}
    return (dispatch) => {
    dispatch({type: 'profile_Saved', payload:profile });
  };
};