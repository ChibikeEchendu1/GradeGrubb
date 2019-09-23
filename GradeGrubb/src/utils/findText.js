export default (num,school) =>{
    if (num == 2) {
        return school+'\'s  subscription with Grade Grubb has Expired. For enquiries contact the school'
    }
    else if(num == 3){
        return 'Our system is currently down. Try again soon.'
    }
   else if (num == 4) {
        return 'Go to  www.gradegrubb.com to find great deals for your childs development'
    }
    //change anytime you update the app
    else if(num == 5){
        return 'We have recently added exciting features to the app. download the newest update Today'
    }
    else if(num == 6){
        return 'Inorder for us to provide the best service for you we need to be paid. unfortunatly '+ school+' has failed to pay'
    }
    else if(num == 7){
        return 'Grade Grubb keynote event coming soon. visit www.gradegrubb.com/keynote.php for more information'
    }
    else if(num == 8){
        return 'Contact the school to find out why your account is suspended'
    }
  
}