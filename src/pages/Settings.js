import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Settings = () => {
  const [settings, setSettings] = useState({
    siteActive: true,
    maintenanceMode: false,
    allowNewRegistrations: true,
    enableNotifications: true,
    enableEmailNotifications: true,
    enableSMSNotifications: false,
    defaultCurrency: 'USD',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelect = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="space-y-6">
        {/* Site Status */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Site Status</h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="siteActive" className="text-sm font-medium text-gray-700">Site Active</label>
                  <p className="text-sm text-gray-500">
                    Make the website accessible to users
                  </p>
                </div>
                <Switch
                  checked={settings.siteActive}
                  onChange={() => handleToggle('siteActive')}
                  className={classNames(
                    settings.siteActive ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      settings.siteActive ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="maintenanceMode" className="text-sm font-medium text-gray-700">
                    Maintenance Mode
                  </label>
                  <p className="text-sm text-gray-500">
                    Enable maintenance mode for site updates
                  </p>
                </div>
                <Switch
                  checked={settings.maintenanceMode}
                  onChange={() => handleToggle('maintenanceMode')}
                  className={classNames(
                    settings.maintenanceMode ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      settings.maintenanceMode ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Settings */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Registration Settings
            </h3>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="allowNewRegistrations" className="text-sm font-medium text-gray-700">
                    Allow New Registrations
                  </label>
                  <p className="text-sm text-gray-500">
                    Enable or disable new user registrations
                  </p>
                </div>
                <Switch
                  checked={settings.allowNewRegistrations}
                  onChange={() => handleToggle('allowNewRegistrations')}
                  className={classNames(
                    settings.allowNewRegistrations ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      settings.allowNewRegistrations ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Notification Settings
            </h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="enableNotifications" className="text-sm font-medium text-gray-700">
                    Enable Notifications
                  </label>
                  <p className="text-sm text-gray-500">
                    Enable or disable all notifications
                  </p>
                </div>
                <Switch
                  checked={settings.enableNotifications}
                  onChange={() => handleToggle('enableNotifications')}
                  className={classNames(
                    settings.enableNotifications ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      settings.enableNotifications ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="enableEmailNotifications" className="text-sm font-medium text-gray-700">
                    Email Notifications
                  </label>
                  <p className="text-sm text-gray-500">
                    Enable or disable email notifications
                  </p>
                </div>
                <Switch
                  checked={settings.enableEmailNotifications}
                  onChange={() => handleToggle('enableEmailNotifications')}
                  className={classNames(
                    settings.enableEmailNotifications ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      settings.enableEmailNotifications ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="enableSMSNotifications" className="text-sm font-medium text-gray-700">
                    SMS Notifications
                  </label>
                  <p className="text-sm text-gray-500">
                    Enable or disable SMS notifications
                  </p>
                </div>
                <Switch
                  checked={settings.enableSMSNotifications}
                  onChange={() => handleToggle('enableSMSNotifications')}
                  className={classNames(
                    settings.enableSMSNotifications ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      settings.enableSMSNotifications ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>

        {/* General Settings */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">General Settings</h3>
            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="defaultCurrency" className="block text-sm font-medium text-gray-700">
                  Default Currency
                </label>
                <select
                  id="defaultCurrency"
                  name="defaultCurrency"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={settings.defaultCurrency}
                  onChange={(e) => handleSelect('defaultCurrency', e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>

              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                  Timezone
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={settings.timezone}
                  onChange={(e) => handleSelect('timezone', e.target.value)}
                >
                  <option value="UTC">UTC</option>
                  <option value="GMT">GMT</option>
                  <option value="EST">EST</option>
                </select>
              </div>

              <div>
                <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700">
                  Date Format
                </label>
                <select
                  id="dateFormat"
                  name="dateFormat"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={settings.dateFormat}
                  onChange={(e) => handleSelect('dateFormat', e.target.value)}
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 