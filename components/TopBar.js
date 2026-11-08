import { Modal, Pressable, Text, View } from 'react-native';

const menuItems = ['Home', 'Search', 'Profile', 'Settings'];

export default function TopBar({ menuVisible, onToggleMenu, onCloseMenu, onSelectTab }) {
  return (
    <>
      <View className="flex-row items-center justify-between bg-sky-700 px-5 py-4">
        <Text className="text-xl font-bold text-white">Romelyn's App</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open menu"
          accessibilityState={{ expanded: menuVisible }}
          className="p-1"
          onPress={onToggleMenu}
        >
          <Text className="text-2xl text-white">☰</Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        onRequestClose={onCloseMenu}
        transparent
        visible={menuVisible}
      >
        <View className="flex-1 justify-start bg-black/30">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close menu"
            className="absolute inset-0"
            onPress={onCloseMenu}
          />
          <View className="mx-4 mt-16 self-end overflow-hidden rounded-xl bg-white shadow-lg">
            {menuItems.map((label) => (
              <Pressable
                key={label}
                accessibilityRole="button"
                className="min-w-40 border-b border-slate-100 px-6 py-4 active:bg-slate-100"
                onPress={() => {
                  onSelectTab(label);
                  onCloseMenu();
                }}
              >
                <Text className="text-base text-slate-800">{label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}
