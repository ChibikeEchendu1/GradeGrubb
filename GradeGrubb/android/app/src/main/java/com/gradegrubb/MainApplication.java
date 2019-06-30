package com.gradegrubb;
import android.app.Application;
import com.facebook.react.ReactApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.facebook.react.BuildConfig;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
//import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; 
import com.RNFetchBlob.RNFetchBlobPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
//import com.evollu.react.fcm.FIRMessagingPackage
//import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFetchBlobPackage(),
           // new RNFirebasePackage(),

            new RNFirebasePackage(),
           // new RNFetchBlobPackage(),
            new ReactNativeRestartPackage(),
            new RNFetchBlobPackage(),
          // new FIRMessagingPackage(),
           //   new RNFirebaseMessagingPackage(),
            new FIRMessagingPackage(),
            new VectorIconsPackage(),
            new RNFirebaseMessagingPackage(),
            new RNFirebaseNotificationsPackage(),

           
            new PickerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    //FirebaseApp.initializeApp(this);
    SoLoader.init(this, /* native exopackage */ false);
  }
}

 
