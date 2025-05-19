import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { toast } from 'react-hot-toast';

const initialSettings = {
  siteStatus: {
    siteActive: true,
    maintenanceMode: false,
    allowNewRegistrations: true,
  },
  notifications: {
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: false,
  },
  general: {
    defaultCurrency: 'USD',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    language: 'en',
  },
};

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];
const timezones = ['UTC', 'EST', 'PST', 'GMT', 'IST'];
const dateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD', 'DD.MM.YYYY'];
const languages = ['en', 'es', 'fr', 'de', 'ja'];

const TestSettings = () => {
  const [settings, setSettings] = useState(initialSettings);
  const [isSaving, setIsSaving] = useState(false);

  const handleToggle = (category, setting) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting],
      },
    }));
  };

  const handleSelect = (category, setting, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast.success('Test settings saved successfully');
      console.log('Test settings saved:', settings);
    }, 1000);
  };

  const handleReset = () => {
    setSettings(initialSettings);
    toast.success('Test settings reset to default');
    console.log('Test settings reset to default');
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Test Settings</h1>
          <p className="mt-2 text-sm text-gray-700">
            Configure test settings for the health service provider dashboard.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-4">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Reset to Default
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Site Status */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Site Status</h3>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Site Active</label>
                <p className="text-sm text-gray-500">Enable or disable the entire site</p>
              </div>
              <Switch
                checked={settings.siteStatus.siteActive}
                onChange={() => handleToggle('siteStatus', 'siteActive')}
                className={`${
                  settings.siteStatus.siteActive ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    settings.siteStatus.siteActive ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Maintenance Mode</label>
                <p className="text-sm text-gray-500">Show maintenance page to all users</p>
              </div>
              <Switch
                checked={settings.siteStatus.maintenanceMode}
                onChange={() => handleToggle('siteStatus', 'maintenanceMode')}
                className={`${
                  settings.siteStatus.maintenanceMode ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    settings.siteStatus.maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Allow New Registrations</label>
                <p className="text-sm text-gray-500">Enable or disable new user registrations</p>
              </div>
              <Switch
                checked={settings.siteStatus.allowNewRegistrations}
                onChange={() => handleToggle('siteStatus', 'allowNewRegistrations')}
                className={`${
                  settings.siteStatus.allowNewRegistrations ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    settings.siteStatus.allowNewRegistrations ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Email Notifications</label>
                <p className="text-sm text-gray-500">Send notifications via email</p>
              </div>
              <Switch
                checked={settings.notifications.emailNotifications}
                onChange={() => handleToggle('notifications', 'emailNotifications')}
                className={`${
                  settings.notifications.emailNotifications ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    settings.notifications.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">SMS Notifications</label>
                <p className="text-sm text-gray-500">Send notifications via SMS</p>
              </div>
              <Switch
                checked={settings.notifications.smsNotifications}
                onChange={() => handleToggle('notifications', 'smsNotifications')}
                className={`${
                  settings.notifications.smsNotifications ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    settings.notifications.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Push Notifications</label>
                <p className="text-sm text-gray-500">Send push notifications to mobile devices</p>
              </div>
              <Switch
                checked={settings.notifications.pushNotifications}
                onChange={() => handleToggle('notifications', 'pushNotifications')}
                className={`${
                  settings.notifications.pushNotifications ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    settings.notifications.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Marketing Emails</label>
                <p className="text-sm text-gray-500">Send marketing and promotional emails</p>
              </div>
              <Switch
                checked={settings.notifications.marketingEmails}
                onChange={() => handleToggle('notifications', 'marketingEmails')}
                className={`${
                  settings.notifications.marketingEmails ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    settings.notifications.marketingEmails ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">General Settings</h3>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                Default Currency
              </label>
              <select
                id="currency"
                name="currency"
                value={settings.general.defaultCurrency}
                onChange={(e) => handleSelect('general', 'defaultCurrency', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                Timezone
              </label>
              <select
                id="timezone"
                name="timezone"
                value={settings.general.timezone}
                onChange={(e) => handleSelect('general', 'timezone', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {timezones.map((timezone) => (
                  <option key={timezone} value={timezone}>
                    {timezone}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700">
                Date Format
              </label>
              <select
                id="dateFormat"
                name="dateFormat"
                value={settings.general.dateFormat}
                onChange={(e) => handleSelect('general', 'dateFormat', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {dateFormats.map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                id="language"
                name="language"
                value={settings.general.language}
                onChange={(e) => handleSelect('general', 'language', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSettings; 