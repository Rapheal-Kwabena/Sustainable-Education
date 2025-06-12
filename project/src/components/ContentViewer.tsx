import React, { useState } from 'react';
import { ExternalLink, Play, FileText, Download, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentViewerProps {
  title: string;
  description: string;
  url: string;
  type: 'pdf' | 'video' | 'link' | 'image';
  className?: string;
}

const ContentViewer: React.FC<ContentViewerProps> = ({ title, description, url, type, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'video': return Play;
      case 'pdf': return FileText;
      case 'link': return ExternalLink;
      case 'image': return Eye;
      default: return FileText;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'video': return 'from-red-500 to-pink-500';
      case 'pdf': return 'from-blue-500 to-indigo-500';
      case 'link': return 'from-green-500 to-emerald-500';
      case 'image': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const Icon = getIcon();

  const handleView = () => {
    if (type === 'link') {
      window.open(url, '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'video':
        return (
          <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden">
            {url.includes('youtube.com') || url.includes('youtu.be') ? (
              <iframe
                src={url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                className="w-full h-full"
                allowFullScreen
                title={title}
              />
            ) : (
              <video
                controls
                className="w-full h-full object-cover"
                onLoadStart={() => setIsLoading(true)}
                onLoadedData={() => setIsLoading(false)}
              >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
          </div>
        );
      
      case 'pdf':
        return (
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={`${url}#toolbar=0`}
              className="w-full h-full border-0"
              title={title}
            />
          </div>
        );
      
      case 'image':
        return (
          <div className="w-full">
            <img
              src={url}
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
              onLoad={() => setIsLoading(false)}
              onLoadStart={() => setIsLoading(true)}
            />
            {isLoading && (
              <div className="animate-pulse bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center">
                <div className="text-gray-500">Loading image...</div>
              </div>
            )}
          </div>
        );
      
      default:
        return (
          <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Content preview not available</p>
          </div>
        );
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${getColor()} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">{title}</h3>
                <p className="text-white/90 text-sm mt-1">{description}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleView}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
              title={type === 'link' ? 'Open in new tab' : 'View content'}
            >
              {type === 'link' ? <ExternalLink className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Content Preview */}
        <div className="p-6">
          {type !== 'link' && (
            <div className="mb-4">
              <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                {type === 'video' && (
                  <div className="text-center">
                    <Play className="w-12 h-12 text-gray-400 mb-2 mx-auto" />
                    <p className="text-gray-500 text-sm">Click to play video</p>
                  </div>
                )}
                {type === 'pdf' && (
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-gray-400 mb-2 mx-auto" />
                    <p className="text-gray-500 text-sm">Click to view PDF</p>
                  </div>
                )}
                {type === 'image' && (
                  <img
                    src={url}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleView}
              className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${getColor()} text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-200`}
            >
              <Icon className="w-4 h-4" />
              <span>{type === 'link' ? 'Open Link' : 'View Full'}</span>
            </motion.button>
            
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Download</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Modal for full content view */}
      <AnimatePresence>
        {isModalOpen && type !== 'link' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold font-display">{title}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="p-6 max-h-[calc(90vh-120px)] overflow-auto">
                {renderContent()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContentViewer;