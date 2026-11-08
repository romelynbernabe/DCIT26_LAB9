import './global.css';
import { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

const searchableTabs = ['Home', 'Profile', 'Settings'];

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Profile');
  const [menuVisible, setMenuVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [homeContentDeleted, setHomeContentDeleted] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const matchingTabs = searchableTabs.filter((tab) =>
    tab.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-50">
        <TopBar
          menuVisible={menuVisible}
          onToggleMenu={() => setMenuVisible((visible) => !visible)}
          onCloseMenu={() => setMenuVisible(false)}
          onSelectTab={setSelectedTab}
        />

        <ScrollView className="flex-1" contentContainerClassName="p-6">
          {selectedTab === 'Home' && (
            <View>
              <Text className="mb-4 text-center text-sm font-semibold text-sky-700">
                Home
              </Text>
              {!homeContentDeleted ? (
                <>
                  <Text className="text-3xl font-bold text-center text-sky-700">
                    Hello, World!
                  </Text>

                  <Text className="mt-4 text-center text-base text-slate-600">
                    Hi! I am Romelyn D. Bernabe, a BSIT 3-7 student. I enjoy
                    learning technology, creating projects, and exploring new
                    things.
                  </Text>
                </>
              ) : (
                <Text className="py-8 text-center text-slate-500">
                  The welcome content was deleted.
                </Text>
              )}

              {started && (
                <Text accessibilityLiveRegion="polite" className="mt-4 text-center font-semibold text-emerald-700">
                  You&apos;re all set! Welcome to the app.
                </Text>
              )}

              <Pressable
                accessibilityRole="button"
                className="mt-6 items-center rounded-xl bg-sky-600 py-3 active:opacity-80"
                onPress={() => setStarted(true)}
              >
                <Text className="font-semibold text-white">
                  {started ? 'Started!' : 'Get Started'}
                </Text>
              </Pressable>

              <Pressable
                accessibilityRole="button"
                className="mt-3 items-center rounded-xl border border-sky-600 py-3 active:opacity-80"
                onPress={() => setShowLearnMore((visible) => !visible)}
              >
                <Text className="font-semibold text-sky-700">
                  {showLearnMore ? 'Show Less' : 'Learn More'}
                </Text>
              </Pressable>

              {showLearnMore && (
                <Text className="mt-3 text-center text-slate-600">
                  This app is a simple introduction to building interfaces with
                  React Native and Expo.
                </Text>
              )}

              {homeContentDeleted ? (
                <Pressable
                  accessibilityRole="button"
                  className="mt-3 items-center rounded-xl border border-slate-300 py-3 active:opacity-80"
                  onPress={() => setHomeContentDeleted(false)}
                >
                  <Text className="font-semibold text-slate-700">Restore Content</Text>
                </Pressable>
              ) : (
                <Pressable
                  accessibilityRole="button"
                  className="mt-3 items-center rounded-xl bg-rose-500 py-3 active:opacity-80"
                  onPress={() => setDeleteConfirmationVisible(true)}
                >
                  <Text className="font-semibold text-white">Delete</Text>
                </Pressable>
              )}
            </View>
          )}

          {selectedTab === 'Search' && (
            <View>
              <Text className="mb-4 text-center text-2xl font-bold text-sky-700">
                Search
              </Text>
              <TextInput
                accessibilityLabel="Search app sections"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800"
                onChangeText={setSearchQuery}
                placeholder="Search Home, Profile, Settings"
                placeholderTextColor="#64748b"
                value={searchQuery}
              />
              <View className="mt-4">
                {matchingTabs.map((tab) => (
                  <Pressable
                    key={tab}
                    accessibilityRole="button"
                    className="border-b border-slate-200 py-4"
                    onPress={() => setSelectedTab(tab)}
                  >
                    <Text className="text-base font-medium text-slate-700">
                      {tab}
                    </Text>
                  </Pressable>
                ))}
                {matchingTabs.length === 0 && (
                  <Text className="py-4 text-slate-500">No sections found.</Text>
                )}
              </View>
            </View>
          )}

          {selectedTab === 'Profile' && (
            <View>
              <Text className="mb-6 text-center text-2xl font-bold text-sky-700">
                Profile
              </Text>
              <View className="rounded-xl bg-white p-5">
                <Text className="text-lg font-semibold text-slate-800">
                  Romelyn D. Bernabe
                </Text>
                <Text className="mt-2 text-slate-600">BSIT 3-7 student</Text>
                <Text className="mt-3 text-slate-600">
                  Enjoys learning technology, creating projects, and exploring
                  new things.
                </Text>
              </View>
            </View>
          )}

          {selectedTab === 'Settings' && (
            <View>
              <Text className="mb-6 text-center text-2xl font-bold text-sky-700">
                Settings
              </Text>
              <View className="flex-row items-center justify-between rounded-xl bg-white p-5">
                <View className="mr-4 flex-1">
                  <Text className="font-semibold text-slate-800">
                    Notifications
                  </Text>
                  <Text className="mt-1 text-sm text-slate-500">
                    {notificationsEnabled ? 'Enabled' : 'Disabled'}
                  </Text>
                </View>
                <Switch
                  accessibilityLabel="Toggle notifications"
                  onValueChange={setNotificationsEnabled}
                  value={notificationsEnabled}
                />
              </View>
            </View>
          )}
        </ScrollView>

        <NavBar selectedTab={selectedTab} onSelectTab={setSelectedTab} />

        <Modal
          animationType="fade"
          onRequestClose={() => setDeleteConfirmationVisible(false)}
          transparent
          visible={deleteConfirmationVisible}
        >
          <View className="flex-1 items-center justify-center bg-black/40 px-6">
            <View className="w-full rounded-2xl bg-white p-6">
              <Text className="text-lg font-bold text-slate-800">
                Delete welcome content?
              </Text>
              <Text className="mt-2 text-slate-600">
                This removes the home screen introduction. You can restore it
                afterward.
              </Text>
              <View className="mt-6 flex-row justify-end">
                <Pressable
                  accessibilityRole="button"
                  className="mr-3 rounded-lg px-4 py-2"
                  onPress={() => setDeleteConfirmationVisible(false)}
                >
                  <Text className="font-semibold text-slate-600">Cancel</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  className="rounded-lg bg-rose-500 px-4 py-2"
                  onPress={() => {
                    setHomeContentDeleted(true);
                    setDeleteConfirmationVisible(false);
                  }}
                >
                  <Text className="font-semibold text-white">Delete</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
